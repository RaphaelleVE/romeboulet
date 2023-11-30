import React from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

function CartScreen({navigation}) {
  return (
    <Screen>
      <ImageBackground source={require("../assets/bg-moche.png")}>
      
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  card: {
    alignItems: 'center'
  }
});
export default CartScreen;
