import React from 'react'

const AuthContext=React.createContext({
     logInValid:true,
    logInHandler:()=>{},
    logOutHandler:()=>{},
    inSignUpPage:false,
signUpPageHandler:()=>{},
signOutPageHandler:()=>{},
})

export default AuthContext
