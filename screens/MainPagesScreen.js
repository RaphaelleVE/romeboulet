import React , { useEffect } from "react";
import * as FileSystem from 'expo-file-system';


import AppNavigator from "../navigation/AppNavigator";

function MainPagesScreen({navigation}) {

  useEffect(() => {
    const createShoppingList = async () => {
      try {
        const shoppingListData = {
          cart: [
          ],
        };

        const path = FileSystem.documentDirectory + 'shoppingList.json';
        await FileSystem.writeAsStringAsync(path, JSON.stringify(shoppingListData));
        console.log("Nouveau fichier shoppingList.json créé avec succès !");
      } catch (error) {
        console.error("Erreur lors de la création du fichier shoppingList.json :", error);
      }
    };

    createShoppingList();
  }, []); // Le tableau vide en tant que deuxième argument signifie que cela ne dépend d'aucune dépendance et sera exécuté une seule fois au montage.

  return (
      <AppNavigator />    
  );
}

export default MainPagesScreen;





