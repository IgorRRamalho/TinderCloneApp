import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
import "./GenderPage.css";
import arrow from "../../../assets/arrow.svg";

const GenderPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [gender, setGender] = useState(user.gender || "");
  const [showExtraOptions, setShowExtraOptions] = useState(false);

  const handleChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
    setUser({ ...user, gender: selectedGender });
    if (selectedGender === "Choose another") {
      setShowExtraOptions(true);
    } else {
      setShowExtraOptions(false);
    }
  };
  const handleSubmit = () => {
    console.log(user) 
    navigate("/interests");
  };

  return (
    <div className="gender-page">
      <div className="nav_buttons">
        <span className="back-btn" onClick={() => navigate("/basic-info")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </span>
        <span className="skip-btn" onClick={() => navigate("/location")}>
          Skip
        </span>
      </div>

      <h2>I am a</h2>

      <div className="select-container">
        <input
          type="radio"
          className="gender"
          id="man"
          value="Man"
          checked={gender === "Man"}
          onChange={handleChange}
        />
        <label htmlFor="man">Man</label>

        <input
          type="radio"
          className="gender"
          id="woman"
          value="Woman"
          checked={gender === "Woman"}
          onChange={handleChange}
        />
        <label htmlFor="woman">Woman</label>

        <input
          type="radio"
          className="gender"
          id="choose-another"
          value="Choose another"
          checked={gender === "Choose another"}
          onChange={handleChange}
        />

        <label htmlFor="choose-another">
          Choose another
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </label>
        <div
          className={`extra-gender-options ${
            showExtraOptions ? "visible" : ""
          }`}
        >
          <input
            type="radio"
            className="gender"
            id="non-binary"
            value="Non-binary"
            checked={gender === "Non-binary"}
            onChange={handleChange}
          />
          <label htmlFor="non-binary">Non-binary</label>

          <input
            type="radio"
            className="gender"
            id="genderqueer"
            value="Genderqueer"
            checked={gender === "Genderqueer"}
            onChange={handleChange}
          />
          <label htmlFor="genderqueer">Genderqueer</label>

          <input
            type="radio"
            className="gender"
            id="agender"
            value="Agender"
            checked={gender === "Agender"}
            onChange={handleChange}
          />
          <label htmlFor="agender">Agender</label>
        </div>
      </div>

      <button className="confirm_button" onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
};

export default GenderPage;
