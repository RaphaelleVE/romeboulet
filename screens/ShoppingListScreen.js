import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Tonneaux de Grog",
    price: 100,
    image: "",
  },
  {
    id: 2,
    title: "Boulets de canon",
    price: 10,
    image: "",
  },
  {
    id: 3,
    title: "Noix de Coco",
    price: 2,
    image: "",
  },
  {
    id: 4,
    title: "Bananes",
    price: 2,
    image: "",
  },
  {
    id: 5,
    title: "Bouteilles de Rhum",
    price: 20,
    image: "",
  },
  {
    id: 6,
    title: "Bois",
    price: 1,
    image: "",
  },
  {
    id: 7,
    title: "Coutelas Basique",
    price: 10,
    image: "",
  },
];

function ShoppingListScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        // toString() very important
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"S" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ShoppingListScreen;
