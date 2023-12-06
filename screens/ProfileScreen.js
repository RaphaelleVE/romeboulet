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



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function ProfileScreen({navigation}) {
  return (
    <Screen>
      <ImageBackground style={styles.background} source={require("../assets/bg-moche.png")}>
      <Image style={styles.profilePic} source={require("../assets/base-profile-pic.png")} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <SingleLineForm/>
        <SingleLineForm/>


        </Form>
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
    top: 20,
    alignItems: "center",
    position: "absolute",
    borderRadius: 100
  }
});
export default ProfileScreen;
