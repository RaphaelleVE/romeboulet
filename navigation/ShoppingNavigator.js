import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingListScreen from "../screens/ShoppingListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createStackNavigator();
//navigator for shopping managment (list & product detail)
const ShoppingNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
  >
    <Stack.Screen name="ShoppingListScreen" component={ShoppingListScreen} />
    <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
  </Stack.Navigator>
);

export default ShoppingNavigator;
