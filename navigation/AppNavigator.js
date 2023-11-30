import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ShoppingNavigator from "./ShoppingNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";


import NewListingButton from "./NewListingButton";
import routes from "./routes";
import colors from "../config/colors";


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
  
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.PROFILESCREEN)}
          />
        ),
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
      name="Shopping"
      component={ShoppingNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
      <Tab.Screen
      name="CartScreen"
      component={CartScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.CARTSCREEN)}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="cart-plus"
            color={colors.mainBrown}
            size={size}
          />
        ),
      })}
    />
  </Tab.Navigator>
);

export default AppNavigator;
