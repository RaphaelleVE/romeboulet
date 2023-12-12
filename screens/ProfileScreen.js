import React from "react";
import {StyleSheet, Image, ImageBackground } from "react-native";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import * as Yup from "yup";



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function ProfileScreen({navigation}) {
  return (
    <Screen>
      <ImageBackground source={require("../assets/bg-moche.png")}>
      <Image style={styles.logo} source={require("../assets/logo-base.png")} />
      <AppText>PSEUDO</AppText>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
      <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

         
         
        <AppButton title="MODIFIER"
        onPress={() => navigation.navigate(routes.MAINPAGESSCREEN )}
        />
        </Form>
        <AppText>EMAIL</AppText>
        <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
      <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

         
         
        <AppButton title="MODIFIER"
        onPress={() => navigation.navigate(routes.MAINPAGESSCREEN )}
        />
        </Form>
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  card: {
    alignItems: 'center'
  }
});
export default ProfileScreen;
