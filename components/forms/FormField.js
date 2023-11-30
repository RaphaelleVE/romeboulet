import React from "react";
import { useFormikContext } from "formik";

import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

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
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) => setFieldValue(name, text)}
          value={values[name]}
          width={width}
          {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} style={ styles.text } />
      </>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Marhey',
    fontSize: 16,
    flex: 1
  },
});

export default AppFormField;
