import {useState} from 'react'
import AuthContext from './context/auth-context'
import Card from './components/Card/Card';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LogInForm from './components/LogInForm/LogInForm';
import WelcomePage from './components/WelcomePage/WelcomePage';


function App() {

  const [logInValid, setLogInValid] = useState(false);
const [inSignUpPage,setInSignUpPage]=useState(false)


  const logInHandler = () => {
    setLogInValid(true);
  };
  const logOutHandler = () => {
    setLogInValid(false);
  };
const signUpPageHandler=()=>{
  setInSignUpPage(true)
}

const signOutPageHandler = () => {
  setInSignUpPage(false)
}
  return (
  <AuthContext.Provider value={{ logInValid: logInValid ,
    logInHandler:logInHandler,logOutHandler:logOutHandler,
    inSignUpPage:inSignUpPage,
    signUpPageHandler:signUpPageHandler,
    signOutPageHandler:signOutPageHandler
  }}>
    <Card> 
{!logInValid && (<LogInForm/>)}

{inSignUpPage && <SignUpForm/>}
{logInValid && (<WelcomePage/>)}

    </Card>
    </AuthContext.Provider>
  );
}

export default App;
