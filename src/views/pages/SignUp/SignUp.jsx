import logo from "../../assets/trademark.svg";
import React from "react";

import "./signUpStyles.css";

export default function SignUp() {
  return (
    <>
      <div className="container">
        <div className="main_container">
          <img src={logo} alt="Logo Trademark" />

          <div className="main_content">
            <h2>Sign up to continue</h2>
            <button>Continue with email</button>
          </div>
        </div>
        <div className="footer">
          <a href="#">Terms of use</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}
