import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ShoppingListScreen from "../screens/ShoppingListScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
  >
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ShoppingListScreen" component={ShoppingListScreen} />

  </Stack.Navigator>
);

export default AuthNavigator;
