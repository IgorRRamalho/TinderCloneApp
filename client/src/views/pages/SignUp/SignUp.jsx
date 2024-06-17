/*
========================================================================
  Tela de Login - PRONTA✔
  
  Esta tela permite o usuário logar

  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.8
========================================================================
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../../../services/userService"; // Importa função para obter usuário por email
import logo from "../../assets/trademark.svg"; // Importa o logo da aplicação
import "./signUpStyles.css"; // Importa estilos específicos para a tela de login

export default function SignUp() {
  // Estados locais
  const [showEmailInput, setShowEmailInput] = useState(false); // Estado para controlar a exibição do input de email
  const [email, setEmail] = useState(""); // Estado para armazenar o email digitado
  const navigate = useNavigate(); // Hook de navegação do React Router

  // Função para exibir o input de email ao clicar no botão "Continue with email"
  const handleContinueWithEmail = () => {
    setShowEmailInput(true);
  };

  // Função para navegar de volta para a página principal
  const goTomain = () => {
    navigate("/");
  };

  // Função para enviar o email digitado e buscar o usuário correspondente
  const handleSendEmail = async () => {
    try {
      const user = await getUserByEmail(email); // Chama função assíncrona para obter usuário por email
      if (user && user.id) {
        console.log("User ID:", user.id); // Exibe o ID do usuário no console
        // Redireciona para a página principal com o ID do usuário como parâmetro
        navigate(`/main/${user.id}`);
      } else {
        console.log("Usuário não encontrado"); // Exibe mensagem de usuário não encontrado
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error); // Exibe mensagem de erro no console em caso de falha
    }
  };

  return (
    <>
      <div className="container">
        <div className="main_container">
          <img className="logo" src={logo} alt="Logo Trademark" /> {/* Logo da aplicação */}

          <div className="main_content">
            <h2>Sign up to continue</h2> {/* Título da tela */}
            <div className={`input_wrapper ${showEmailInput ? "active" : ""}`}>
              {showEmailInput && ( {/* Renderiza o input de email apenas se showEmailInput for true */}
                <>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  /> {/* Input para inserir o email */}
                  <button
                    onClick={handleSendEmail}
                    className="button_send_email"
                  >
                    Login {/* Botão para enviar o email */}
                  </button>
                </>
              )}
            </div>
            {!showEmailInput && ( {/* Renderiza o botão "Continue with email" se showEmailInput for false */}
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
          <a href="#">Terms of use</a> {/* Link para os Termos de Uso */}
          <a href="">Privacy Policy</a> {/* Link para a Política de Privacidade */}
        </div>
      </div>
    </>
  );
}
