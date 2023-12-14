import React, { useState } from "react";
import { View, StyleSheet, FlatList, ImageBackground, Image, ScrollView} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import * as cartData from '../test.json';
import * as FileSystem from 'expo-file-system';



const listings = [
  {
    id: 1,
    title: "Tonneaux de Grog",
    price: 100,
    description: "Délicieux tonneaux de grog issue de la réserve personelle du capitaine Pendragon",
    image: require("../assets/baril_Grog.png"),
  },
  {
    id: 2,
    title: "Boulets de canon",
    price: 10,
    description: "De bons boulets (je ne parle pas de vos matelots) utile pour casser du navire",
    image: require("../assets/cannon_ball.png"),
  },
  {
    id: 3,
    title: "Noix de Coco",
    price: 2,
    description: "Noix de coco, idéale pour se raffraichir en pleine mer! a consommer avec modération",
    image: require("../assets/coconut.png"),
  },
  {
    id: 4,
    title: "Bananes",
    price: 2,
    description: "Le véritable snack du bon pirate, permet de se nourrir peu importe la situation",
    image: require("../assets/banana.jpg"),
  },
  {
    id: 5,
    title: "Bouteilles de Rhum",
    price: 20,
    description: "caisse de bouteille de rhum du sailor's bounty, a consommer sans aucune modération ! ",
    image: require("../assets/rhum_Bottles.png"),
  }];

function ProductDetailScreen({navigation, route}) {
   let [quantity, setQuantity] = useState(0);

   const handleAddToCart = async () => {
    try {
      const path = FileSystem.documentDirectory + 'shoppingList.json';

      // Lire le contenu actuel du fichier JSON
      const currentContent = await FileSystem.readAsStringAsync(path);

      // Convertir le contenu en objet JSON
      const currentData = JSON.parse(currentContent);

      // Ajouter de nouvelles données à l'objet JSON
      currentData.cart.push({ id: 3, name: "Nouvel article", price: 30 });

      // Convertir l'objet JSON mis à jour en chaîne JSON
      const updatedContent = JSON.stringify(currentData);

      // Écrire la chaîne JSON mise à jour dans le fichier
      await FileSystem.writeAsStringAsync(path, updatedContent);

      console.log("Données ajoutées avec succès au fichier shoppingList.json !");
    } catch (error) {
      console.error("Erreur lors de l'écriture dans le fichier shoppingList.json :", error);
    }
  };


   function incrementQuantity() {
     quantity = quantity + 1;
     setQuantity(quantity);
   }
   function decrementQuantity() {
     if(quantity > 0)
     quantity = quantity - 1;
     setQuantity(quantity);
   }
  return (
    <Screen>
      <ImageBackground style = {styles.background} source={require("../assets/bg-moche.png")}>
      <AppButton styleParam={styles.backButtons} customTitle="BACK" onPress={() => navigation.goBack()}></AppButton>
        <ScrollView style = {styles.scrollView}>
          <AppText numberOfLines={2} adjustsFontSizeToFit style={styles.title}>{route.params.product.title}</AppText>
          <Image style={styles.picture} source={route.params.product.image}/>
          <AppText style={styles.description}>{route.params.product.description}</AppText>
          <View style={styles.priceTag}>
            <AppText style={styles.price}>Prix a l'unité : {route.params.product.price}</AppText>
            <Image style={styles.doubloon} source={require("../assets/doubloons.png")} />
          </View>
          <View style={styles.quantitySetter}>
            <AppText style={styles.price}>Quantitée : {quantity}</AppText>
            <AppButton styleParam={styles.buttons} customTitle="-" onPress={decrementQuantity}></AppButton>
            <AppButton styleParam={styles.buttons} customTitle="+" onPress={incrementQuantity}></AppButton>
          </View>
          <View style={styles.orderButton}>
          <AppButton styleParam={styles.orderButton} customTitle="Ajouter au Panier" onPress={handleAddToCart}></AppButton>
          </View>
          </ScrollView>
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
  },
  title: {
    alignContent: "center",
    alignItems: "center",
    fontFamily: "Marhey",
    fontSize:35,
    margin:10,
    alignSelf: "center",
    textAlign: "center",
  },
  picture: {
      width: 250,
      height: 250,
      borderRadius: 150,
      alignSelf: "center",
  },
  description: {
    fontFamily: "Marhey",
    margin:10,
    textAlign: "center",
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 10

  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
  },
  scrollView: {
    backgroundColor: colors["mainWhite"],
    borderRadius: 30,
    margin: 15,
    marginTop: 5,
    marginBottom : 30
  },
  doubloon: {
    width:25,
    height:25
  },
  price: {
    fontFamily: "Marhey",
    paddingLeft: 10,
    paddingRight: 5,
  },
  priceTag: {
    flexDirection: "row",
  },
  quantitySetter: {
    flexDirection: "row"
  },
  buttons: {
    width:100,
    height:30,
    marginVertical:0,
  },
  backButtons: {
    width:100,
    height:40,
    alignItems: "center",
    padding : 7,
    margin: 15,
  },
  orderButton:{
    alignItems: "center",
  }
});

export default ProductDetailScreen;
