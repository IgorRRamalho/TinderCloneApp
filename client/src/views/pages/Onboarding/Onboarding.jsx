import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import CarouselImages from "../../components/CarouselImages";
import "./Onboarding.css";

/*
========================================================================
  Tela Inicial / Tela de Login - PRONTA✔
  
  Esta tela permite o usário ir para tela de cadastro ou para a
  tela de login.
  
  Componentes utilizados:
  - CarouselImages: Exibe o carrosel de imagens e legendas em conjunto
  
  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 2.7
========================================================================
*/

export default function Onboarding() {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/SignUp");
  };

  const goToBasicInfo = () => {
    navigate("/basic-info");
  };

  return (
    <>
      <CarouselImages />
      <button className="create_account" onClick={goToBasicInfo}>
        Create an account
      </button>

      <span className="sign_in">
        Already have an account?{" "}
        <button onClick={goToSignUpPage} className="sign_in_button">
          Sign In
        </button>
      </span>
    </>
  );
}
