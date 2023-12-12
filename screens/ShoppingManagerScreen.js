import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "../navigation/AppNavigator";
import ShoppingNavigator from "../navigation/ShoppingNavigator";

function ShoppingManagerScreen() {
  return (
      <ShoppingNavigator />
  );
}


export default ShoppingManagerScreen;
