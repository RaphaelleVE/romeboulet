import React, { useEffect, useState } from "react";
import { StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, View } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import AppFormField from "../components/forms/FormField";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        () => navigation.navigate(routes.MAINPAGESSCREEN);
      }
    });

    return unsubscribe;
  }, [])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with : ', user.email);
        navigation.navigate(routes.MAINPAGESSCREEN)
      })
      .catch(error => alert(error.message))
  }

  const handleLogout = () => {
    signOut(auth)
      .catch(error => alert(error.message))
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

          <View style={styles.inputContainer}>
            <AppFormField
              name="email"
              state={email}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={text => setEmail(text)}
            />
            <AppFormField
              name="password"
              state={password}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              onChangeText={text => setPassword(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <AppButton 
              title="Login"
              onPress={handleLogin}
            />
            {/* <AppButton 
              title="Logout"
              onPress={handleLogout}
            /> */}
            <AppButton 
              title="Sign up"
              color="mainWhite"
              textColor="mainBrown"
              onPress={() => navigation.navigate(routes.SIGNUP)}
            />
          </View>
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
    inputContainer: {
      width: '80%'
    },
    buttonContainer: {
      width: '80%',
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
    }
  });

export default LoginScreen;
