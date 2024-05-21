import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "primereact/carousel";

import SignUp from "../SignUpPage/SignUp";
import girl2 from "../../assets/girl2.png";

export default function Onboarding() {
  const navigate = useNavigate();
  const goToSignUpPage = () => {
    navigate("/SignUp");
  };

  const productTemplate = () => {
    return <div className="border-1 surface-border border-round m-2 text-center py-5 px-3"></div>;
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <Carousel
            value={girl2}
            numVisible={1}
            numScroll={1}
            className="custom-carousel"
            circular
            autoplayInterval={3000}
            itemTemplate={productTemplate}
          />
        </div>

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

      <button className="create_account">Create an account</button>

      <span>
        Already have an account?{" "}
        <button onClick={goToSignUpPage}>Sign In</button>
      </span>
    </>
  );
}
