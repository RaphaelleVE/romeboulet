import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ShoppingNavigator from "../navigation/ShoppingNavigator";

//screen holding navigation for shoppinglistscreen & productdetailscreen
function ShoppingManagerScreen() {
  return (
      <ShoppingNavigator />
  );
}


export default ShoppingManagerScreen;
