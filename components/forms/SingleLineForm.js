import React from "react";
import { useFormikContext } from "formik";

import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import AppButton from "../AppButton";
import { FaSave } from "react-icons/fa";
import colors from "../../config/colors";





function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  const [loaded] = useFonts({
    Marhey: require('../../assets/fonts/Marhey-Light.ttf')
  })

  if(!loaded) {return null}

  if (loaded) {
    return (
      <>
        <View style={styles.line}>
        <AppTextInput
        styleParam={styles.input}
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) => setFieldValue(name, text)}
          value={values[name]}
          width={width}
          {...otherProps}
        />
        <AppButton  styleParam={styles.button}>
          <FaSave />
</AppButton>
</View>
        <ErrorMessage error={errors[name]} visible={touched[name]} style={ styles.text } />
      </>
    );
  }
}

const styles = StyleSheet.create({
  line :{
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: "row",
  },
  text: {
    fontFamily: 'Marhey',
    fontSize: 16,
    flex: 1
  },
  button : {
    backgroundColor: colors.mainBrown,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%",
    width: "15%",
    marginVertical: 10,
  },
  input: {
    backgroundColor: colors.mainWhite,
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    margin: "5%",
    width: "75%",
    marginVertical: 10
  },
});

export default AppFormField;
