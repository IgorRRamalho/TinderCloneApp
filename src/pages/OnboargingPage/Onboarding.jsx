import React from "react";
import { useNavigate } from "react-router-dom";

import SignUp from "../SignUpPage/SignUp";
import girl2  from "../../assets/girl2.png";

export default function Onboarding(){

    const navigate = useNavigate();
    const goToSignUpPage = () =>{
        navigate('/SignUp')
    }

    return(<>
        <div className="container">
            <div className="content_img">
                <img src={girl2}/>
            </div>

            <div className="content_text">
                <h1 className="title">Algorithm</h1>
                <p className="text">Users going through a vetting process to ensure you never match with bots.</p>
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

        <span>Already have an account? <button onClick={goToSignUpPage}>Sign In</button></span>
    
    </>)
}