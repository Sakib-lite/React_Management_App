import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputValueHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouched(true);
  };
  const inputValueBlurHandler = () => {
    setIsTouched(true);
  };
  const valueIsValid = validateValue(enteredValue);

  let notValid = !valueIsValid && isTouched;

  const reset =()=>{
    setEnteredValue("");
    setIsTouched(false)
  }
  return {
    enteredValue,
    valueIsValid,
    inputValueHandler,
    inputValueBlurHandler,
    notValid,
    reset,
  };
};

export default useInput;
