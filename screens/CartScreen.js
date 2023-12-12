import React from "react";
import { View, StyleSheet, FlatList, ImageBackground,Image } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

function CartScreen({navigation}) {
  return (
    <Image style={styles.profilePic} source={require("../assets/base-profile-pic.png")} />

  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text : {
    color : "#FFFEF7",
    paddingBottom : 10,
    textAlign: 'right'
  },
  forms : {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  profilePic: {
    width: 200,
    height: 200,
    top: 20,
    alignItems: "center",
    position: "absolute",
    borderRadius: 100
  }

});
export default CartScreen;
