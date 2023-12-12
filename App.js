import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./navigation/AuthNavigator";
import React, { useState } from 'react';
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return(
    <LoginScreen />
  );
}

const styles = StyleSheet.create({});