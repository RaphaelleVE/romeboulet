import React from "react";
import { Text } from "react-native";
import { useFonts } from 'expo-font';

import defaultStyles from "../config/styles";

//base app text
function AppText({ children, style, ...otherProps }) {
  const [loaded] = useFonts({
    'Marhey': require('../assets/fonts/Marhey-Light.ttf'),
  });

  if(!loaded) {return null}

  if (loaded) {
    return (
      <Text style={[defaultStyles.text, style]} {...otherProps} fontFamily="Marhey">
        {children}
      </Text>
    );
  }
}


export default AppText;
