import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./navigation/AuthNavigator";
import React, { useState } from 'react';

export default function App() {
  return(
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});