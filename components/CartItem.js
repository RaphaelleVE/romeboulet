import React from "react";

import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppTextInput from "./AppTextInput";
import colors from "./../config/colors";
import AppButton from "./AppButton";
import AppTextContainerView from "./AppTextContainerView"




function CartItem({ name, width, title, ...otherProps }) {

  const [loaded] = useFonts({
    Marhey: require('../assets/fonts/Marhey-Light.ttf')
  })

  if(!loaded) {return null}

  if (loaded) {
    return (
      <>
        <View style={styles.line}>
        <AppTextContainerView
        styleParam={styles.product}
        text={title}
        />
        <AppTextContainerView
        styleParam={styles.number}
        />
        <AppButton  styleParam={styles.button} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  line :{
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: "row",
  },
  text: {
    fontFamily: 'Marhey',
    fontSize: 16,
    flex: 1
  },
  button : {
    backgroundColor: colors.mainBrown,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    marginVertical: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  product: {
    backgroundColor: colors.mainWhite,
    borderRadius: 0,
    flexDirection: "row",
    padding: 15,
    width: "65%",
    marginVertical: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  number: {
    backgroundColor: colors.danger,
    borderRadius: 0,
    flexDirection: "row",
    padding: 15,
    width: "20%",
    marginVertical: 10,
  },

});

export default CartItem;
