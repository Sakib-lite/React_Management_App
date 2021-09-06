import { useState, useEffect ,useContext} from "react";
import useInput from "../../hooks/use-input";
import "./SignUpForm.css";
import AuthContext from '../../context/auth-context';

const SignUpForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);

const ctx=useContext(AuthContext)

  const {
    enteredValue: name,
    inputValueHandler: nameInputHandler,
    inputValueBlurHandler: nameInputBlurHandler,
    notValid: nameNotValid,
    valueIsValid: isNameValid,
    reset: nameInputReset,
  } = useInput((value) => value.trim().length > 4);

  const {
    enteredValue: email,
    inputValueHandler: emailInputHandler,
    inputValueBlurHandler: emailInputBlurHandler,
    notValid: emailNotValid,
    valueIsValid: isEmailValid,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  const {
    enteredValue: rollNumber,
    inputValueHandler: rollNumberInputHandler,
    inputValueBlurHandler: rollNumberInputBlurHandler,
    notValid: rollNumberNotValid,
    valueIsValid: isRollNumberValid,
    reset: rollNumberInputReset,
  } = useInput((value) => value.length >= 7);

  const {
    enteredValue: mobileNumber,
    inputValueHandler: mobileNumberInputHandler,
    inputValueBlurHandler: mobileNumberInputBlurHandler,
    notValid: mobileNumberNotValid,
    valueIsValid: isMobileNumberValid,
    reset: mobileNumberInputReset,
  } = useInput((value) => value.trim().length === 11);

  const {
    enteredValue: birthDate,
    inputValueHandler: dateOfBirthInputHandler,
    inputValueBlurHandler: dateOfBirthInputBlurHandler,
    notValid: dateOfBirthNotValid,
    valueIsValid: isDateOfBirthValid,
    reset: dateOfBirthInputReset,
  } = useInput((value) => value.length >= 6);

  const {
    enteredValue: username,
    inputValueHandler: usernameInputHandler,
    inputValueBlurHandler: usernameInputBlurHandler,
    notValid: usernameNotValid,
    valueIsValid: isUsernameValid,
    reset: usernameInputReset,
  } = useInput((value) => value.length >= 6);

  const {
    enteredValue: password,
    inputValueHandler: passwordInputHandler,
    inputValueBlurHandler: passwordInputBlurHandler,
    valueIsValid: isPasswordValid,
    notValid: passwordNotValid,
    reset: passwordInputReset,
  } = useInput((value) => value.length >= 6);

  useEffect(() => {
    if (
      isNameValid &&
      isEmailValid &&
      isUsernameValid &&
      isDateOfBirthValid &&
      isMobileNumberValid &&
      isRollNumberValid &&
      isPasswordValid
    ) {
      return setIsFormValid(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    name,
    email,
    mobileNumber,
    rollNumber,
    birthDate,
    username,
    password,
  ]);

  const formSubmitHandler = (e) => {
    e.preventDefault();



    ctx.signOutPageHandler()

    



    nameInputReset();
    emailInputReset();
    rollNumberInputReset();
    mobileNumberInputReset();
    dateOfBirthInputReset();
    usernameInputReset();
    passwordInputReset();
  };

const sendDataHandler= async function (userData){
userData = {
      name,
      email,
      mobileNumber,
      rollNumber,
      birthDate,
      username,
      password,
    };
await fetch('https://management-app-2cb09-default-rtdb.firebaseio.com/members.json',{
    method:'POST',
    body: JSON.stringify(userData),
    headers:{'content-type':'application/json'}

  })

}

  const nameError = nameNotValid ? "invalid" : "";
  const emailError = emailNotValid ? "invalid" : "";
  const rollNumberError = rollNumberNotValid ? "invalid" : "";
  const mobileNumberError = mobileNumberNotValid ? "invalid" : "";
  const dateOfBirthError = dateOfBirthNotValid ? "invalid" : "";
  const usernameError = usernameNotValid ? "invalid" : "";
  const passwordError = passwordNotValid ? "invalid" : "";

  return (
    <form onSubmit={formSubmitHandler}>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <h2>Sign Up</h2>
      <div>
        <label> Full Name: </label>
        <input
          className={nameError}
          type="text"
          placeholder=""
          onChange={nameInputHandler}
          value={name}
          onBlur={nameInputBlurHandler}
        />
        {nameError && (
          <p className="invalid_message">Please enter your full name</p>
        )}
      </div>
      <br />
      <div>
        <label> E-mail: </label>
        <br />
        <input
          type="text"
          placeholder=""
          onChange={emailInputHandler}
          value={email}
          onBlur={emailInputBlurHandler}
          className={emailError}
        />
        {emailError && (
          <p className="invalid_message">Please enter your email address</p>
        )}
      </div>
      <br />
      <div>
        <label> Roll Number: </label>
        <input
          type="number"
          placeholder=""
          onChange={rollNumberInputHandler}
          value={rollNumber}
          onBlur={rollNumberInputBlurHandler}
          className={rollNumberError}
        />
        {rollNumberError && (
          <p className="invalid_message">
            Please enter your 7 digit id. as example 6665216
          </p>
        )}
      </div>
      <br />
      <div>
        <label> Mobile Number: </label>
        <input
          type="number"
          placeholder=""
          onChange={mobileNumberInputHandler}
          value={mobileNumber}
          onBlur={mobileNumberInputBlurHandler}
          className={mobileNumberError}
        />
        {mobileNumberError && (
          <p className="invalid_message">
            Please enter your 11 digit mobile number
          </p>
        )}
      </div>
      <br />
      <div>
        <label> Date of birth: </label>
        <input
          type="date"
          placeholder=""
          onChange={dateOfBirthInputHandler}
          value={birthDate}
          onBlur={dateOfBirthInputBlurHandler}
          className={dateOfBirthError}
        />
        {dateOfBirthError && (
          <p className="invalid_message">Please select your date of birth</p>
        )}
      </div>
      <br />
      <div>
        <label> Username: </label>
        <input
          type="text"
          placeholder=""
          onChange={usernameInputHandler}
          value={username}
          onBlur={usernameInputBlurHandler}
          className={usernameError}
        />
        {usernameError && (
          <p className="invalid_message">
            Please enter your username .As example sakib75
          </p>
        )}
      </div>
      <br />
      <div>
        <label> Password: </label>
        <input
          type="text"
          placeholder=""
          onChange={passwordInputHandler}
          value={password}
          onBlur={passwordInputBlurHandler}
          className={passwordError}
          rules={["number"]}
        />
        {passwordError && (
          <p className="invalid_message">
            Please enter your password.It must be 6 digit long
          </p>
        )}
      </div>

      <button type="submit" disabled={!isFormValid} onClick={sendDataHandler}>
        Submit{" "}
      </button>
      {!isFormValid && <p className="invalid_message"> Fill Up all the fields</p>}

      <div>
        <button id="submitBtn" type="button" onClick={ctx.signOutPageHandler}>
          Log In
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
