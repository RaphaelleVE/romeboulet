import React, { useState } from "react";
import { View, StyleSheet, FlatList, ImageBackground, Image, ScrollView} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import * as FileSystem from 'expo-file-system';

function ProductDetailScreen({navigation, route}) {
   let [quantity, setQuantity] = useState(1);

   const handleAddToCart = async () => {
    try {
      const path = FileSystem.documentDirectory + 'shoppingList.json';
      // Read JSON file
      const currentContent = await FileSystem.readAsStringAsync(path);
      // convert in JSON object
      const currentData = JSON.parse(currentContent);
      // check if product is already in cart, if yes increase quantity instead
      const elementExists = currentData.cart.findIndex(product => product.id === route.params.product.id);
      if(elementExists === -1){
      // add data to JSON object
      currentData.cart.push({
        "id": route.params.product.id,
        "title": route.params.product.title,
        "price": route.params.product.price,
        "quantity": quantity
      });
    }else{
      currentData.cart[elementExists].quantity += quantity ;
    }
      // convert JSON object to JSON chain
      const updatedContent = JSON.stringify(currentData);
      // write JSON chain into JSON file
      await FileSystem.writeAsStringAsync(path, updatedContent);
      console.log("Data succesfully added to shoppingList.json !");
    } catch (error) {
      console.error("Error writing in shoppingList.json :", error);
    }
  };

  //add 1 to quantity 
   function incrementQuantity() {
     quantity = quantity + 1;
     setQuantity(quantity);
   }
   //remove 1 to quantity 
   function decrementQuantity() {
     if(quantity > 0)
     quantity = quantity - 1;
     setQuantity(quantity);
   }
  return (
    <Screen>
      <ImageBackground style = {styles.background} source={require("../assets/bg-moche.png")}>
        <AppButton 
          styleParam={styles.backButtons} 
          title="Retour" 
          color="mainWhite"
          textColor="mainBrown"
          onPress={() => navigation.goBack()}
        />

        <ScrollView style = {styles.scrollView}>
          <AppText numberOfLines={2} adjustsFontSizeToFit style={styles.title}>{route.params.product.title}</AppText>
          <Image style={styles.picture} source={route.params.product.image}/>
          <AppText style={styles.description}>{route.params.product.description}</AppText>
          <View style={styles.priceTag}>
            <AppText style={styles.price}>Prix a l'unité : {route.params.product.price}</AppText>
            <Image style={styles.doubloon} source={require("../assets/doubloons.png")} />
          </View>
          <View style={styles.quantitySetter}>
            <AppText style={styles.price}>Quantité : {quantity}</AppText>
            <AppButton 
              styleParam={styles.buttons} 
              title="-" 
              onPress={decrementQuantity}
            />
            <AppButton 
              styleParam={styles.buttons} 
              title="+" 
              onPress={incrementQuantity}
            />
          </View>

          <View style={styles.orderButton}>
            <AppButton 
              title="Ajouter au panier" 
              onPress={handleAddToCart}
              styleParam={{marginTop: 50, width: '95%'}}
            />
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
    paddingHorizontal: 10,
    paddingRight: 5,
  },
  priceTag: {
    flexDirection: "row",
  },
  quantitySetter: {
    flexDirection: "row"
  },
  buttons: {
    width:80,
    height:30,
    marginVertical:0,
    marginHorizontal: 2,
    padding: 0
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
