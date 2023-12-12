import React, { useEffect, useState } from "react";
import { StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
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


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('coucou');
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log('là', user);
      if (user) {
        console.log('ici');
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
          <TouchableOpacity 
            title="Login"
            onPress={handleLogin}
            style={styles.button} 
          >
            <AppText text={"LOGIN"} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity 
            title="Logout"
            onPress={handleLogout}
            style={styles.button} 
          >
            <AppText text={"LOGOUT"} color={colors.white} />
          </TouchableOpacity>
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
    },
    text : {
        color : "#FFFEF7",
        paddingBottom : 10,
        textAlign: 'right'
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

export default LoginScreen;
