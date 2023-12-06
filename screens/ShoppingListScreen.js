import React from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Tonneaux de Grog",
    price: 100,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 2,
    title: "Boulets de canon",
    price: 10,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 3,
    title: "Noix de Coco",
    price: 2,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 4,
    title: "Bananes",
    price: 2,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 5,
    title: "Bouteilles de Rhum",
    price: 20,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 6,
    title: "Bois",
    price: 1,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 7,
    title: "Coutelas Basique",
    price: 10,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 8,
    title: "Pistolet a Silex",
    price: 30,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 9,
    title: "Coffre de stockage",
    price: 20,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 10,
    title: "Voile du légendaire Warsmith Ténébreux",
    price: 265000,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 11,
    title: "cd-rhum",
    price: 2,
    image: require("../assets/doubloons.png"),
  },
  {
    id: 12,
    title: "mangue sur une fourchette",
    price: 10,
    image: require("../assets/doubloons.png"),
  },
];

function ShoppingListScreen({navigation}) {
  return (
    <Screen>
      <ImageBackground source={require("../assets/bg-moche.png")}>
      <FlatList
      style={styles.screen}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        // toString() very important
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
          />
        )}
      />
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  card: {
    alignItems: 'center'

  }
});
export default ShoppingListScreen;
