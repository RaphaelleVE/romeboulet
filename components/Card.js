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
        <Image src="test"/> 
      </View>
      <View style={styles.subTitleContainer}>
      <AppText color="secondary">{subTitle}</AppText>
      </View>
      <View style={styles.button}>
      <AppButton title="Ajouter au Panier" color="mainBrown"
        textColor="mainWhite" styleParam={styles.buttonStyles}></AppButton>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: "white",
    overflow: "hidden",
  },
  cardImage: {
    width: "90%",
    height: 200,
  },
  detailContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    borderColor: "black",
    borderWidth: 5,
    flexDirection: "row",
  },
  subTitleContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    borderColor: "black",
    borderWidth: 5,
    flexDirection: "row",
  },
  text: {
    marginBottom: 7,
  },
  button: {
    alignItems: "center",
    alignContent:"center",
  },
  buttonStyles: {
    backgroundColor: colors.mainBrown,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
    marginVertical: 10,
  },
});
export default Card;
