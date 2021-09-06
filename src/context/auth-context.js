import React from 'react'

const AuthContext=React.createContext({
     logInValid:false,
    logInHandler:()=>{},
    logOutHandler:()=>{},
    inSignUpPage:false,
signUpPageHandler:()=>{},
signOutPageHandler:()=>{},
})

export default AuthContext
