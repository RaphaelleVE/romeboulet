import React from "react";
import { View, StyleSheet, FlatList, ImageBackground, Image} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";

function ProductDetailScreen({navigation, route}) {
  return (
    <Screen>
      <ImageBackground source={require("../assets/bg-moche.png")}>
          <AppText style={styles.title}>{route.params.product.title}</AppText>
          <Image style={styles.picture} source={route.params.product.image}/>
          <AppText style={styles.description}>{route.params.product.description}</AppText>
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
    fontSize: 20
  },
  picture: {
    image: {
      width: 400,
      height: 400,
    }
  },
  description: {
    fontFamily: "Marhey",
    fontSize: 10
  }
});

export default ProductDetailScreen;
