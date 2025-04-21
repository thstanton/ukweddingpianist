import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export const useForm = () => {
  const context = useContext(FormContext);

  if (!context)
    throw new Error("useForm must be used inside a FormContextProvider");

  return context;
};
