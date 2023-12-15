import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Image, ImageBackground } from "react-native";


import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import ShoppingManagerScreen from "../screens/ShoppingManagerScreen";


import NewListingButton from "./NewListingButton";
import routes from "./routes";
import colors from "../config/colors";


const Tab = createBottomTabNavigator();

//bottom app bar navigation 
const AppNavigator = () => (
  <Tab.Navigator
  screenOptions={{
    headerShown: false,
  }}>
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, focused , size }) => (
          <MaterialCommunityIcons 
          name="account" 
          color={focused ? colors.black : colors.mainBrown} 
          size={size}  />
        ),
      }}
    />
    <Tab.Screen
      name="ShoppingManagerScreen"
      component={ShoppingManagerScreen}
      options={({ navigation }) => ({
        tabBarButton: (useIsFocused) => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.SHOPPINGMANAGERSCREEN)}
            styleParam={useIsFocused ? null : styles.buttonFocused}
          />
        ),
      })}
    />
      <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({ color, size , focused}) => (
          <MaterialCommunityIcons 
          name="basket" 
          size={size} 
          color={focused ? colors.black : colors.mainBrown} />
        ),
      }}
    />
  </Tab.Navigator>
);


const styles = StyleSheet.create({
  buttonFocused: {
    backgroundColor: colors.black,
    borderColor: colors.mainWhite,
    }
});


export default AppNavigator;
