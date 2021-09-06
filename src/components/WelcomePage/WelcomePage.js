import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import "./WelcomePage.css";

const WelcomePage = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className="landing_page">
      <button type="button" onClick={ctx.logOutHandler} className="wlcmBtn">
        Log Out
      </button>
      <div>
        <h1>Welcome home</h1>
      </div>
    </div>
  );
};

export default WelcomePage;
