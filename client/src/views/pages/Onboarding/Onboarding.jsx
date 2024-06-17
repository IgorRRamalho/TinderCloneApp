/*
========================================================================
  Tela Inicial / Tela de Login - PRONTA✔
  
  Esta tela permite o usuário ir para tela de cadastro ou para a
  tela de login.
  
  Componentes utilizados:
  - CarouselImages: Exibe o carrossel de imagens e legendas em conjunto
  
  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 2.7
========================================================================
*/
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos do carrossel
import { useNavigate } from "react-router-dom"; // Hook de navegação do React Router
import CarouselImages from "../../components/Carousel/CarouselImages"; // Componente de carrossel de imagens
import "./Onboarding.css"; // Estilos específicos para a tela de Onboarding

export default function Onboarding() {
  const navigate = useNavigate(); // Hook de navegação

  // Função para navegar para a página de cadastro ao clicar em "Create an account"
  const goToSignUpPage = () => {
    navigate("/SignUp");
  };

  // Função para navegar para a página de informações básicas ao clicar no carrossel
  const goToBasicInfo = () => {
    navigate("/basic-info");
  };

  return (
    <>
      <CarouselImages /> {/* Renderiza o componente de carrossel de imagens */}
      <button className="create_account" onClick={goToBasicInfo}>
        Create an account {/* Botão para criar uma conta */}
      </button>

      <span className="sign_in">
        Already have an account?{" "} {/* Texto indicando que já possui uma conta */}
        <button onClick={goToSignUpPage} className="sign_in_button">
          Sign In {/* Botão para entrar na conta */}
        </button>
      </span>
    </>
  );
}
