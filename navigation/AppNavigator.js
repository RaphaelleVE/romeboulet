import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


import ShoppingNavigator from "./ShoppingNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";


import NewListingButton from "./NewListingButton";
import routes from "./routes";
import colors from "../config/colors";
import navigationTheme from "./navigationTheme";
import ShoppingManagerScreen from "../screens/ShoppingManagerScreen";


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
  theme={appTheme}
  screenOptions={{
    headerShown: false,
  }}>
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Shopping"
      component={ShoppingManagerScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="cart-plus"
            color={colors.mainBrown}
            size={size}
          />
        ),
      }}
    />
      <Tab.Screen
      name="Cart"
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
    background:"../assets/bg-moche.png"
  },
};


export default AppNavigator;
