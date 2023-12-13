import React from "react";
import { View, StyleSheet, FlatList, ImageBackground,Image } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import CartItem from "../components/CartItem";
import AppButton from "../components/AppButton";
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
];

function CartScreen({navigation}) {
  return (
    <Screen>
     <ImageBackground style={styles.background} source={require("../assets/bg-moche.png")}>
      <FlatList
        style={styles.screen}
          data={listings}
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
