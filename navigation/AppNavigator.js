import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {  DefaultTheme } from '@react-navigation/native';


import ShoppingNavigator from "./ShoppingNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";


import NewListingButton from "./NewListingButton";
import routes from "./routes";
import colors from "../config/colors";
import navigationTheme from "./navigationTheme";


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
  theme={appTheme}
  screenOptions={{
    headerShown: false,
  }}>
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Shopping"
      component={ShoppingNavigator}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="cart-plus"
            color={colors.mainBrown}
            size={size}
          />
        ),
      })}
    />
      <Tab.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);


const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'#FFF'
  },
};


export default AppNavigator;
