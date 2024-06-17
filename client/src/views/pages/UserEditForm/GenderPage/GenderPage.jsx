/*
========================================================================
  Página de Seleção de Gênero
  
  Esta página permite ao usuário selecionar seu gênero.
  
  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.8
========================================================================
*/
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
import "./GenderPage.css";

const GenderPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Estado para armazenar o gênero selecionado
  const [gender, setGender] = useState(user.gender || "");
  
  // Estado para controlar a exibição das opções extras de gênero
  const [showExtraOptions, setShowExtraOptions] = useState(false);

  // Função para lidar com a mudança de seleção de gênero
  const handleChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
    setUser({ ...user, gender: selectedGender });

    // Mostra as opções extras se "Choose another" for selecionado
    if (selectedGender === "Choose another") {
      setShowExtraOptions(true);
    } else {
      setShowExtraOptions(false);
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    navigate("/interests");
  };

  return (
    <div className="gender-page">
      {/* Navegação */}
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
        {/* Botão de pular */}
        <span className="skip-btn" onClick={() => navigate("/interests")}>
          Skip
        </span>
      </div>

      <h2>I am a</h2>

      {/* Container para seleção de gênero */}
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
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </label>

        {/* Opções extras de gênero */}
        <div className={`extra-gender-options ${showExtraOptions ? "visible" : ""}`}>
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

      {/* Botão de continuar */}
      <button className="confirm_button" onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
};

export default GenderPage;
