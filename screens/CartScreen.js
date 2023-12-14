import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ImageBackground,Image } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import CartItem from "../components/CartItem";
import AppButton from "../components/AppButton";
import * as cartData from '../test.json';

function CartScreen({navigation}) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartData = async () => {
      // Charger les données du fichier JSON
      try {
        const response = await fetch("../test.json");
        const data = await response.json();
        setCartItems(data.cart);
      } catch (error) {
        console.error("Erreur lors du chargement des données JSON :", error);
      }
    };

    // Appeler la fonction pour charger les données
    loadCartData();
  }, []); // Le tableau vide en tant que deuxième argument signifie que cela ne doit s'exécuter qu'une fois à l'initialisation du composant

  return (
    <Screen>
     <ImageBackground style={styles.background} source={require("../assets/bg-moche.png")}>
      <FlatList
        style={styles.screen}
          data={cartData.cart}
          keyExtractor={(listing) => listing.id.toString()}
          // toString() very important
          renderItem={({ item }) => (
            <CartItem title = {item.title}/>
          )}
        />
           <AppButton customTitle="Commander" />
     </ImageBackground>
    </Screen>
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
