import React, { useEffect, useState } from "react";
import {StyleSheet, Image, ImageBackground } from "react-native";
import Form from "../components/forms/Form";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import * as Yup from "yup";
import routes from "../navigation/routes";
import { auth } from "../firebaseConfig";
import { sendPasswordResetEmail, signOut, updateEmail, verifyBeforeUpdateEmail } from "firebase/auth";
import InputContainer from "../components/forms/InputContainer";
import AppFormField from "../components/forms/FormField";
import ButtonContainer from "../components/forms/ButtonContainer";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function ProfileScreen({navigation}) {
  const currentUser = auth.currentUser;
  const [email, setEmail] = useState(currentUser.email);
  
  const handleUpdateEmail = () => {
      verifyBeforeUpdateEmail(currentUser, email)
        .then(alert('Email updated ! An email has been send to verify the new one.'))
        .catch(e => {
          alert('An error occurs...')
          console.error(e);
        })
  }
  
  const handleUpdatePassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(alert('An email has been send'))
      .catch(e => {
        alert('An error occurs...')
        console.error(e);
      })
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigation.navigate(routes.LOGIN))
      .catch(error => alert(error.message))
  }

  return (
    <Screen>
      <ImageBackground style={styles.background} source={require("../assets/bg-moche.png")}>
        <Image style={styles.profilePic} source={require("../assets/base-profile-pic.png")} />

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
              textContentType="emailAdress"
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
            title="Change password"
            onPress={handleUpdatePassword}
            styleParam={{marginTop: 20, marginBottom: 0}}
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
