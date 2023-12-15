import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import defaultStyles from "../config/styles";
import colors from "../config/colors";

//component for text input
function AppTextInput({ icon, width = "100%", styleParam="default" , ...otherProps }) {
  const [loaded] = useFonts({
    Marhey: require('../assets/fonts/Marhey-Light.ttf')
  })

  if(!loaded) {return null}

  if (loaded) {
    return (
      <View style={[styles.container, { width }, styleParam]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={styles.text}
          {...otherProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainWhite,
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    width: "90%",
    marginVertical: 10
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontFamily: 'Marhey',
    fontSize: 16,
    flex: 1
  },
});

export default AppTextInput;
