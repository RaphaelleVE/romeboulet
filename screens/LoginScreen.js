import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen({navigation}) {
    return (
      <Screen >
         <ImageBackground blurRadius={3.5} style={styles.background} source={require("../assets/bg-login.png")}>
         <Image style={styles.logo} source={require("../assets/logo-base.png")} />
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
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        {/* <SubmitButton title="Login" /> */}
        <AppButton title="Login"
        onPress={() => navigation.navigate(routes.MAINPAGESSCREEN )}
        />
        <AppButton 
        title="Sign up"
        color="mainWhite"
        textColor="mainBrown"
         onPress={() => navigation.navigate(routes.SIGNUP)}
         />
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
    logo: {
      width: 200,
      height: 200,
      top: 70,
      alignItems: "center",
      position: "absolute",
    }
  });

export default LoginScreen;
