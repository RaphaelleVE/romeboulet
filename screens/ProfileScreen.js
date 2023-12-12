import React from "react";
import {StyleSheet, Image, ImageBackground } from "react-native";
import Form from "../components/forms/Form";
import SingleLineForm from "../components/forms/SingleLineForm";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import * as Yup from "yup";
import routes from "../navigation/routes";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function ProfileScreen({navigation}) {
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
        style ={styles.forms}
        initialValues={{ nickname: "", email: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <SingleLineForm
         autoCapitalize="none"
         autoCorrect={false}
         icon="account"
         name="nickname"
         placeholder="Pseudo"
         textContentType="nickname"
        />
        <SingleLineForm
         autoCapitalize="none"
         autoCorrect={false}
         icon="email"
         keyboardType="email-address"
         name="email"
         placeholder="Email"
         textContentType="emailAddress"
        />
        </Form>
        <AppButton 
          title="Logout"
          color="primary"
          textColor="mainWhite"
          onPress={handleLogout}
        />
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
  forms : {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 200,
    height: 200,
    top: 20,
    alignItems: "center",
    position: "absolute",
    borderRadius: 100
  }
});
export default ProfileScreen;
