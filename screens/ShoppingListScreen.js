import React from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

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
  },
  {
    id: 6,
    title: "Bois",
    price: 1,
    description: "Simple planche de bois, idéale pour réparer le moindre trou dans le coque du navire. clous vendus séparement",
    image: require("../assets/plank.png"),
  },
  {
    id: 7,
    title: "Coutelas Basique",
    price: 10,
    description: "L'arme de base de tout bon pirate, permet de se battre n'importe ou et n'importe quand",
    image: require("../assets/cutlass.png"),
  },
  {
    id: 8,
    title: "Pistolet a Silex",
    price: 30,
    description: "Une bonne arme de pointe ! capable de tirer une balle toute les 30s, une cadence jamais vu auparavant, modèle produit par grogsmay industry",
    image: require("../assets/flintlock.png"),
  },
  {
    id: 9,
    title: "Coffre de stockage",
    price: 20,
    description: "Idéal pour ranger les petits trésor que vous trouverez lors de vos pirateries",
    image: require("../assets/storage_chest.png"),
  },
  {
    id: 10,
    title: "Voile du légendaire Warsmith Ténébreux",
    price: 265000,
    description: "Les fameuses voiles abbordée par le bateau du terrible capitaine warmsith ténébreux, on raconte pouvoir sentir sa puissance a travers celles-ci",
    image: require("../assets/warsmith_sails.png"),
  },
  {
    id: 11,
    title: "cd-rhum",
    price: 2,
    description: "Idéal si votre bateau possède un tourne-disque, permet de jouer les meilleurs tubes de l'année 1480 ! ",
    image: require("../assets/doubloons.png"),
  },
  {
    id: 12,
    title: "mangue sur une fourchette",
    price: 10,
    description: "Nothing like a mango on a fork *crounch* AAAAAAAAAAAAAAAAAAAAAAAAAAEEEEEEEEEEEEEEEEEEE",
    image: require("../assets/mango_on_a_fork.jpg"),
  },
];

function ShoppingListScreen({navigation}) {
  return (
    <Screen>
      <ImageBackground style={styles.background} source={require("../assets/bg-moche.png")}>
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
              description={item.description}
              onPress={() => navigation.navigate(routes.PRODUCTDETAILSCREEN,{ product : item })}
            />
          )}
        />
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
  screen: {
    padding: 20,
  },
  card: {
    alignItems: 'center'

  }
});
export default ShoppingListScreen;
