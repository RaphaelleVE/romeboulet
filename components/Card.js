import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "./AppText";

function Card({ image, subTitle, title }) {
  return (
    <View style={styles.card} >
      <View style={styles.detailContainer}>
        <AppText style={styles.text}>{title}</AppText>
        <AppText color="secondary">{subTitle}</AppText>
      </View>
      <AppButton title="Ajouter au Panier" color="mainBrown"
        textColor="mainWhite"></AppButton>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: "mainWhite",
    overflow: "hidden",
  },
  cardImage: {
    width: "90%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  text: {
    marginBottom: 7,
  },
});
export default Card;
