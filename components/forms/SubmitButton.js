import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, styleParamSubmit = "default" }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton styleParam={[styleParamSubmit]} customTitle={title} onPress={handleSubmit} />;
}

export default SubmitButton;
