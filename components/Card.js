import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "./AppText";
import routes from "../navigation/routes";

function Card({ navigation, image, subTitle, title, description }) {
  return (
    <View style={styles.card} >
      <View style={styles.detailContainer}>
        <AppText style={styles.text}>{title}</AppText>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.subTitleContainer}>
      <AppText color="secondary">{subTitle}</AppText>
      <Image style={styles.doubloon} source={require("../assets/doubloons.png")} />
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
    flexDirection: "row",
  },
  subTitleContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: "row",
  },
  text: {
    marginBottom: 7,
    maxWidth: 200,
    minWidth: 200,
    textAlignVertical: "center",
    fontFamily: 'Marhey',
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
  doubloon: {
    width:25,
    height:25
  },
  image: {
    width: 120,
    height: 120,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  }
});
export default Card;
