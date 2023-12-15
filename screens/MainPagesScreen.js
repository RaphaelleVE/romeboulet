import React , { useEffect } from "react";
import * as FileSystem from 'expo-file-system';


import AppNavigator from "../navigation/AppNavigator";

function MainPagesScreen({navigation}) {

  //use effect called when the page is generated : here generated when user is connected
  useEffect(() => {

    //create JSON file used to manage user cart
    const createShoppingList = async () => {
      try {
        //JSON file content (empty when initialized)
        const shoppingListData = {
          cart: [
          ],
        };

        //path is in filsystem of the smartphone. The JSON is stocked in that phone.
        const path = FileSystem.documentDirectory + 'shoppingList.json';
        //writing shoppingListData const into JSON and create it
        await FileSystem.writeAsStringAsync(path, JSON.stringify(shoppingListData));
        console.log("New JSON file shoppingList.json succesfully created !");
      } catch (error) {
        console.error("Error when creating shoppingList.json :", error);
      }
    };

    createShoppingList();
  }, []); 

  return (
      <AppNavigator />    
  );
}

export default MainPagesScreen;





