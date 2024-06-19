/*
========================================================================
  Tela de Login - PRONTA✔
  
  Esta tela permite o usário logar

  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.8
========================================================================
*/
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../../../services/userService";
import logo from "../../assets/trademark.svg";
import "./signUpStyles.css";
import { UserIdContext } from "../../../contexts/UserIdContext";


export default function SignUp() {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const { setUserId } = useContext(UserIdContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinueWithEmail = () => {
    setShowEmailInput(true);
  };

  const goTomain = () => {
    navigate("/");
  };

  const handleSendEmail = async () => {
    try {
      const user = await getUserByEmail(email);
      if (user && user.id) {
        console.log("User ID:", user.id);
        setUserId(user.id); // Armazena o ID do usuário no contexto
        navigate("/main");
      } else {
        console.log("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    }
  };
  

  return (
    <>
      <div className="container">
        <div className="main_container">
          <img className="logo" src={logo} alt="Logo Trademark" />

          <div className="main_content">
            <h2>Sign up to continue</h2>
            <div className={`input_wrapper ${showEmailInput ? "active" : ""}`}>
              {showEmailInput && (
                <>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    onClick={handleSendEmail}
                    className="button_send_email"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
            {!showEmailInput && (
              <button
                onClick={handleContinueWithEmail}
                className="button_continue"
              >
                Continue with email
              </button>
            )}
          </div>
        </div>
        <div className="footer" onClick={goTomain}>
          <a href="#">Terms of use</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}
