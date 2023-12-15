import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import colors from "../config/colors";
function AppButton({ title, onPress, color = "mainBrown", textColor = "mainWhite", styleParam }) {
  const [loaded] = useFonts({
    Marhey: require('../assets/fonts/Marhey-Medium.ttf')
  })

  if(!loaded) {return null}

  if (loaded) {
    return (
      <TouchableOpacity
        style={[styles.button, styleParam, { backgroundColor: colors[color] }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: colors[textColor]}]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.mainBrown,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "100%",
    marginVertical: 5,
  },
  text: {
    color: colors.mainWhite,
    textTransform: "uppercase",
    fontFamily: 'Marhey',
    fontSize: 16
  },
});

export default AppButton;