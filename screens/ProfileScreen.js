import React, { useState } from "react";
import {StyleSheet, Image, ImageBackground } from "react-native";
import Form from "../components/forms/Form";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import * as Yup from "yup";
import routes from "../navigation/routes";
import { auth, storage } from "../firebaseConfig";
import { sendPasswordResetEmail, signOut, updateProfile, verifyBeforeUpdateEmail } from "firebase/auth";
import InputContainer from "../components/forms/InputContainer";
import AppFormField from "../components/forms/FormField";
import ButtonContainer from "../components/forms/ButtonContainer";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getBlobFromUri from "../services/image/getBlobFromUri";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email")
});

function ProfileScreen({navigation}) {
  const currentUser = auth.currentUser;
  const [email, setEmail] = useState(currentUser.email);
  const [profileImg, setProfileImg] = useState(null);
  const [currentPic, setCurrentPic] = useState(currentUser.photoURL);
  
  //Choose a picture from the gallery
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1
    });

    if (!result.canceled) {
      setProfileImg(result.assets[0].uri);
      setCurrentPic(result.assets[0].uri);
      updateProfilePic(result.assets[0].uri);
    }
  }

  //Upload the image into firebase storage
  const uploadImageToStorage = async (imageFile, userId) => {
    const storageRef = ref(storage, `profilePics/${userId}_${Date.now()}.jpg`); // Create a reference
    const metadata = {contentType: "image/jpeg"};
    const imageBlob = await getBlobFromUri(imageFile);
    
    // Upload the file
    await uploadBytes(storageRef, imageBlob, metadata);
  
    // Get download URL
    const url = await getDownloadURL(storageRef);
  
    return url;
  }

  //Update the current user profile picture
  const updateProfilePic = async (uri) => {
    try {
      const userId = currentUser.uid;
      const photoURL = await uploadImageToStorage(uri, userId);
  
      await updateProfile(currentUser, {photoURL});
  
    } catch(e) {
      console.log(e);
    }
  }
  
  //Update the user's email 
  const handleUpdateEmail = () => {
    verifyBeforeUpdateEmail(currentUser, email)
      .then(alert('Email updated ! An email has been send to verify the new one.'))
      .catch(e => {
        alert('An error occurs...')
        console.error(e);
      })
  }
  
  //Update the user's password
  const handleUpdatePassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(alert('An email has been send'))
      .catch(e => {
        alert('An error occurs...')
        console.error(e);
      })
  }

  //Log out the current user
  const handleLogout = () => {
    signOut(auth)
      .then(() => navigation.navigate(routes.LOGIN))
      .catch(error => alert(error.message))
  }

  return (
    <Screen>
      <ImageBackground style={styles.background} source={require("../assets/bg-moche.png")}>
        {
          currentPic ? 
            <Image style={styles.profilePic} source={{ uri: currentPic }} />
          :
            <Image style={styles.profilePic} source={require("../assets/base-profile-pic.png")} />
        }

        <Form
          initialValues={{ email: email }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <InputContainer>
            <AppFormField 
              name="email"
              state={email}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={text => setEmail(text)}
            />
          </InputContainer>

          <ButtonContainer>
            <AppButton 
              title="Update email"
              onPress={handleUpdateEmail}
              styleParam={{marginBottom: 20, marginTop: 0}}
            />
          </ButtonContainer>
        </Form>

        <ButtonContainer>
          <AppButton 
            title="Change picture"
            onPress={pickImage}
            styleParam={{marginBottom: 5, marginTop: 20}}
          />

          <AppButton 
            title="Change password"
            onPress={handleUpdatePassword}
            styleParam={{marginTop: 5, marginBottom: 0}}
          />
          
          <AppButton 
            title="Logout"
            color="primary"
            textColor="mainWhite"
            onPress={handleLogout}
            styleParam={{marginTop: 15, marginBottom: 35}}
          />
        </ButtonContainer>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text : {
    color : "#FFFEF7",
    paddingBottom : 10,
    textAlign: 'right'
  },
  profilePic: {
    width: 200,
    height: 200,
    top: 60,
    alignItems: "center",
    position: "absolute",
    borderRadius: 100
  }
});
export default ProfileScreen;
