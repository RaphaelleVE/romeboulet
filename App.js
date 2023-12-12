import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./navigation/AuthNavigator";
import React, { useState } from 'react';
import SignupScreen from "./screens/SignupScreen";

export default function App() {
  return(
    <SignupScreen />
  );
}

const styles = StyleSheet.create({});