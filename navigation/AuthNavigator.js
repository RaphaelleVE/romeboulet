import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import MainPagesScreen from "../screens/MainPagesScreen";

const Stack = createStackNavigator();

//navigation for login and sign up
const AuthNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
  >
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
    <Stack.Screen name="MainPagesScreen" component={MainPagesScreen} />

  </Stack.Navigator>
);

export default AuthNavigator;
