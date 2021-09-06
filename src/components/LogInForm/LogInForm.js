import React, { useState, useEffect, useContext } from "react";
import "./LogInForm.css";
import AuthContext from "../../context/auth-context";

const LogInForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isTouched, setIsTouched] = useState(false);

const [error,setError] = useState(null);

  const ctx = useContext(AuthContext);

  let loadedTasks = [];

  const fetchDataHandler = async () => {
   setError(null)
   try{
    const response = await fetch(
      "https://management-app-2cb09-default-rtdb.firebaseio.com/members.json"
    );

    const data = await response.json();

    for (const taskKey in data) {
      loadedTasks.push({
        id: taskKey,
        username: data[taskKey].username,
        password: data[taskKey].password,
      });
    }
    console.log(loadedTasks);
  }catch(err){

setError(err.message)

  }

};

  useEffect(() => {
    fetchDataHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const usernameInputHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const showPasswordHandler = () => {
    const box = document.getElementById("checkbox");
    box.checked ? setShowPassword(true) : setShowPassword(false);
  };

  // const blurHandler = () => {
  //   setIsTouched(true);
  // };

  const logInFormSubmitHandler = (e) => {
    e.preventDefault();
    fetchDataHandler();

    console.log(loadedTasks);
    for (const i of loadedTasks) {
      if (i.username === enteredUsername && i.password === enteredPassword) {
        ctx.logInHandler() && setEnteredUsername("") && setEnteredPassword() 
      }else{
        setIsTouched(true)
      }
    }
  };

  loadedTasks=[]

  return (
    <form>
      <h2>Sign In</h2>

      <div>
        <label> Username: </label>
        <input
          type="text"
          placeholder=""
          onChange={usernameInputHandler}
          value={enteredUsername}
          
          
          
        />
        {isTouched && (<p className="invalid_message">Invalid input</p>)}
      </div>
      <br />
      <div>
        <label> Password: </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder=""
          onChange={passwordInputHandler}
          value={enteredPassword}
        
         
        />
         {isTouched && (<p className="invalid_message">Invalid input</p>)}
      </div>

      <div className="showPassword">
        <label> Show Password </label>
        <input type="Checkbox" onClick={showPasswordHandler} id="checkbox" className="noBoxShadow"/>
      </div>
      <br />
      <div>
        <button onClick={logInFormSubmitHandler} type="submit">
          LOG IN
        </button>
        {error && <p>{error}</p>}
      </div>
      <div>
        <button id="submitBtn" type="button" onClick={ctx.signUpPageHandler}>
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default LogInForm;
