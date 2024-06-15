import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../../../services/Api";
import logo from "../../assets/trademark.svg";
import "./signUpStyles.css";

/*
========================================================================
  Tela de Login - PRONTA✔
  
  Esta tela permite o usário logar

  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.8
========================================================================
*/

export default function SignUp() {
  const [showEmailInput, setShowEmailInput] = useState(false);
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
        // Redirecionar para a página principal com o ID do usuário
        navigate(`/main/${user.id}`);
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
