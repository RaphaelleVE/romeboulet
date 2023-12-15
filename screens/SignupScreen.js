import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import * as Yup from "yup";
import Form from "../components/forms/Form";
import routes from "../navigation/routes";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import InputContainer from "../components/forms/InputContainer";
import ButtonContainer from "../components/forms/ButtonContainer";
import AppFormField from "../components/forms/FormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //Add new user in firebase & send an email to verify the email address
  const handleSignUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          
          setEmail('');
          setPassword('');
          setConfirmPassword('');

          sendEmailVerification(auth.currentUser)
            .then(() => {
              navigation.navigate(routes.MAINPAGESSCREEN);
            })
        })
        .catch(error => alert(error.message))
    }
  }

  return (
    <Screen >
      <ImageBackground blurRadius={3.5} style={styles.background} source={require("../assets/bg-login.png")}>
        <Image style={styles.logo} source={require("../assets/logo-base.png")} />

        <Form
          initialValues={{ email: email, password: password, confirmPassword: confirmPassword }}
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
              placeholder="Mot de passe"
              secureTextEntry
              textContentType="password"
              onChangeText={text => setPassword(text)}
            />
            <AppFormField
              name="confirmPassword"
              state={confirmPassword}
              placeholder="Confirmation du mot de passe"
              secureTextEntry
              textContentType="password"
              onChangeText={text => setConfirmPassword(text)}
            />
          </InputContainer>

          <ButtonContainer>
            <AppButton
              title="Inscription"
              onPress={handleSignUp}
            />
            <AppButton 
              title="Connexion"
              color="mainWhite"
              textColor="mainBrown"
              onPress={() => navigation.navigate(routes.LOGIN)}
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

export default SignupScreen;
