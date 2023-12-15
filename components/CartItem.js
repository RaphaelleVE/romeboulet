import React from "react";

import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppTextInput from "./AppTextInput";
import colors from "./../config/colors";
import AppButton from "./AppButton";
import AppTextContainerView from "./AppTextContainerView"




function CartItem({ name, width, title, quantity, price, ...otherProps }) {

  const [loaded] = useFonts({
    Marhey: require('../assets/fonts/Marhey-Light.ttf')
  })

  if(!loaded) {return null}

  if (loaded) {
    return (
        <View style={styles.line}>
          <AppTextContainerView
          numberOfLines={1}
          styleParam={styles.product}
          text={title}/>
        <AppTextContainerView
        styleParam={styles.number}
        text={"x" + quantity}
        numberOfLines={1}
        />
         <AppTextContainerView
        styleParam={styles.price}
        text={price*quantity}
        numberOfLines={1}
        />
        <AppButton  styleParam={styles.button} customTitle={"-"}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  line :{
    paddingLeft: 10,
    marginTop:10,
    flexDirection: "row",
    backgroundColor: colors.mainWhite,
    borderRadius: 30
  },
  text: {
    fontFamily: 'Marhey',
    fontSize: 16,
    flex: 1
  },
  button : {
    backgroundColor: colors.mainBrown,
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    marginVertical: 10,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  product: {
    borderRadius: 0,
    width: "40%",
    marginVertical: 10,
  },
  number: {
    width: "20%",
    marginVertical: 10,
  },
  price:{
    width: "25%",
  }
});

export default CartItem;
