import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselImages from "../../components/CarouselImages";
import { Link } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/SignUp");
  };

  const goToBasicInfo =() =>{
    navigate("/basic-info")

  }

  const goToMainPage =() =>{
    navigate("/main")

  }

  return (
    <>
      <div className="container">
        <CarouselImages/>
      </div>

      <span>
        <button onClick={goToMainPage}>TELA MAIN</button>
      </span>
    <button className="create_account" onClick={goToBasicInfo}>Create an account</button>

   
      
       
      <span>
        Already have an account?{" "}
        <button onClick={goToSignUpPage}>Sign In</button>
      </span>
    </>
  );
}