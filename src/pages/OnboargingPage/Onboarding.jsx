import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselImages from "../../components/CarouselImages";
import { Link } from 'react-router-dom';


export default function Onboarding() {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/SignUp");
  };

  const goToCreateAccountPage =() =>{
    navigate("/CreateAccount")

  }

  return (
    <>
      <div className="container">
        <CarouselImages/>

        <div className="content_text">
          <h1 className="title">Algorithm</h1>
          <p className="text">
            Users going through a vetting process to ensure you never match with
            bots.
          </p>
        </div>
      </div>
      <ul className="options">
        <li>
          <input type="radio" />
        </li>
        <li>
          <input type="radio" />
        </li>
        <li>
          <input type="radio" />
        </li>
      </ul>

    <button className="create_account" onClick={goToCreateAccountPage}>Create an account</button>

    <Link to = "/CreateAccount"></Link>

      
       
      <span>
        Already have an account?{" "}
        <button onClick={goToSignUpPage}>Sign In</button>
      </span>
    </>
  );
}
