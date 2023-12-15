import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, findIndex } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "./AppText";
import routes from "../navigation/routes";
import * as FileSystem from 'expo-file-system';


const handlePress = () => {
  // Your logic for onPress goes here
  console.log('TouchableOpacity pressed!');
};

function Card({ onPress, image, subTitle, title, id }) {

  const handleAddToCart = async () => {
    try {
      const path = FileSystem.documentDirectory + 'shoppingList.json';
  
      // Lire le contenu actuel du fichier JSON
      const currentContent = await FileSystem.readAsStringAsync(path);
  
      // Convertir le contenu en objet JSON
      const currentData = JSON.parse(currentContent);
      // vérifie si l'élément existe deja dans la panier, si oui on incrémente justqe sa quantitée
      const elementExists = currentData.cart.findIndex(product => product.id === id);
      if(elementExists === -1){
        // Ajouter de nouvelles données à l'objet JSON
      currentData.cart.push({
        "id": id,
        "title": title,
        "price": subTitle,
        "quantity": 1
      });
      }else{
        currentData.cart[elementExists].quantity += 1 ;
      }
  
      // Convertir l'objet JSON mis à jour en chaîne JSON
      const updatedContent = JSON.stringify(currentData);
  
      // Écrire la chaîne JSON mise à jour dans le fichier
      await FileSystem.writeAsStringAsync(path, updatedContent);
  
      console.log("Données ajoutées avec succès au fichier shoppingList.json !");
    } catch (error) {
      console.error("Erreur lors de l'écriture dans le fichier shoppingList.json :", error);
    }
  };

  return (
    <TouchableOpacity
    onPress={onPress}>
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
      <AppButton customTitle="Ajouter au Panier" color="mainBrown"
        textColor="mainWhite" styleParam={styles.buttonStyles} onPress={handleAddToCart}></AppButton>
        </View>
    </View>
    </TouchableOpacity>
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
