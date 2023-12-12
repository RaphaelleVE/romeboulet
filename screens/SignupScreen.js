import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import * as Yup from "yup";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import routes from "../navigation/routes";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AppText from "../components/AppText";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with : ', user.email);
          navigation.navigate(routes.MAINPAGESSCREEN)
        })
        .catch(error => alert(error.message))
    }
  }

  return (
    <Screen >
      <ImageBackground blurRadius={3.5} style={styles.background} source={require("../assets/bg-login.png")}>
        <Image style={styles.logo} source={require("../assets/logo-base.png")} />

        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="confirmPassword"
            placeholder="Confirm password"
            secureTextEntry
            textContentType="password"
            onChangeText={text => setConfirmPassword(text)}
          />
          <TouchableOpacity
            title="Sign up"
            onPress={handleSignUp}
            style={styles.button} 
          >
            <AppText text={"SIGN UP"} color={colors.white} />
          </TouchableOpacity>
          <AppButton 
            title="Login"
            color="mainWhite"
            textColor="mainBrown"
            onPress={() => navigation.navigate(routes.LOGIN)}
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
  },
  error: {
    color: "red"
  },
  button: {
    backgroundColor: colors.mainBrown,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
    marginVertical: 10,
  },
});

export default SignupScreen;
