import React from "react";
import {StyleSheet, Image, ImageBackground } from "react-native";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
import SingleLineForm from "../components/forms/SingleLineForm";

import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import * as Yup from "yup";
import AppNavigator from "../navigation/AppNavigator";



const validationSchema = Yup.object().shape({
  nickname: Yup.string().required().min(2).max(10).label("Pseudo"),
  email: Yup.string().required().email().label("Email"),
});

function ProfileScreen({navigation}) {
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
        <AppButton customTitle="Deconnexion" 
        onPress={() => navigation.goBack()}/>
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
