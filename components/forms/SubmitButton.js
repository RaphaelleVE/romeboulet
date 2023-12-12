import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, onPress }) {
  const { handleSubmit } = useFormikContext();

  return <TouchableOpacity title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
