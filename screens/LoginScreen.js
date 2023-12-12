import React, { useEffect, useState } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import Form from "../components/forms/Form";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import AppFormField from "../components/forms/FormField";
import InputContainer from "../components/forms/InputContainer";
import ButtonContainer from "../components/forms/ButtonContainer";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
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

  // const handleLogout = () => {
  //   signOut(auth)
  //     .catch(error => alert(error.message))
  // }

  return (
    <Screen >
      <ImageBackground blurRadius={3.5} style={styles.background} source={require("../assets/bg-login.png")}>
        <Image style={styles.logo} source={require("../assets/logo-base.png")} />

        <Form
          initialValues={{ email: email, password: password }}
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
            <AppFormField
              name="password"
              state={password}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              onChangeText={text => setPassword(text)}
            />
          </InputContainer>

          <ButtonContainer>
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
          </ButtonContainer>
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
