import React, { useState } from "react";
import { View, StyleSheet, FlatList, ImageBackground,Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import CartItem from "../components/CartItem";
import AppButton from "../components/AppButton";
import * as FileSystem from 'expo-file-system';
import AppText from "../components/AppText";


function CartScreen({navigation}) {

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState();

  useFocusEffect(
    React.useCallback(() => {
    const loadCartData = async () => {
      try {
        console.log("reload cart");
        const path = FileSystem.documentDirectory + '/shoppingList.json';
        const content = await FileSystem.readAsStringAsync(path);
        let tempTotal = 0;
        const data = JSON.parse(content);
        setCartItems(data.cart);
        data.cart.map((item) => { 
          console.log(item)
          tempTotal += item.price * item.quantity})
          setTotal(tempTotal);
      } catch (error) {
        console.error("Erreur lors du chargement des données JSON :", error);
      }
    };

    // Appeler la fonction pour charger les données
    loadCartData();
  }, [])
  );// Le tableau vide en tant que deuxième argument signifie que cela ne doit s'exécuter qu'une fois à l'initialisation du composant


  return (
    <Screen>
     <ImageBackground style={styles.background} source={require("../assets/bg-moche.png")}>
      <FlatList
        style={styles.screen}
        data={cartItems}
        keyExtractor={(listing) => listing.id.toString()}
        // toString() very important
        renderItem={({ item }) => (
          <CartItem title = {item.title} quantity = {item.quantity} price = {item.price} />
        )}
      />

      <View style={styles.total}>
        <AppText style={styles.totalText}>{"TOTAL: " + total}</AppText>
        <Image style={styles.doubloon} source={require("../assets/doubloons.png")} />
      </View>
      
      <AppButton title="Commander" />
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
  },
  total: {
    alignSelf: "center",
    backgroundColor: colors.mainWhite,
    width: "90%",
    borderRadius: 10,
    flexDirection: "row"
  },
  doubloon: {
    width:25,
    height:25
  },
  totalText: {
    fontFamily: 'Marhey',
    paddingLeft: 5
  }

});
export default CartScreen;
