import React, { useState } from "react";
import { View, StyleSheet, FlatList, ImageBackground, Image, ScrollView} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

function ProductDetailScreen({navigation, route}) {
   let [quantity, setQuantity] = useState(0);
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
          <AppButton styleParam={styles.orderButton} customTitle="Ajouter au Panier"></AppButton>
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
    fontSize:40,
    alignSelf: "center",
    textAlign: "center",
  },
  picture: {
      width: 300,
      height: 300,
      borderRadius: 150,
      alignSelf: "center",
  },
  description: {
    fontFamily: "Marhey",
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
    margin: 15
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
  orderButton:{
    alignItems: "center",
  }
});

export default ProductDetailScreen;
