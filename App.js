import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./navigation/AuthNavigator";
import React, { useState } from 'react';
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return(
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});