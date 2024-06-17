/*
========================================================================
  Página de Informações Básicas do Perfil
  
  Esta página permite ao usuário preencher informações básicas como nome, 
  sobrenome, data de nascimento e foto de perfil.
  
  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.8
========================================================================
*/
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { UploadButton } from "@bytescale/upload-widget-react";
import { UserContext } from "../../../../contexts/UserContext";
import userImage from "../../../assets/user.png";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import "./BasicInfoPage.css";

const BasicInfoPage = () => {
  // Contexto e navegação
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Estados locais para dados do usuário
  const [profileImage, setProfileImage] = useState(user.profileImage || userImage);
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [birthdate, setBirthdate] = useState(user.birthdate ? new Date(user.birthdate) : null);

  // Função para atualizar os estados de primeiro nome e último nome
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };

  // Função para calcular a idade com base na data de nascimento
  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Função para gerar o email com base no primeiro nome e último nome
  const generateEmail = (firstName, lastName) => {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@hotmail.com`;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (birthdate) {
      const age = calculateAge(birthdate);
      const email = generateEmail(firstName, lastName);
      setUser((prevData) => ({
        ...prevData,
        name: `${firstName} ${lastName}`,
        age: age,
        email: email,
        profile_photo: profileImage,
      }));
      navigate("/gender"); // Navega para a próxima página após enviar o formulário
    } else {
      console.error("Please choose your birthday date.");
    }
  };

  // Função para salvar a data de nascimento selecionada
  const handleSaveDate = (date) => {
    setBirthdate(date);
  };

  // Função para lidar com o upload de imagem do usuário
  const handleImageUpload = (files) => {
    const imageUrl = files[0].fileUrl;
    setProfileImage(imageUrl);
  };

  return (
    <div className="main">
      <div className="skip" onClick={() => navigate("/gender")}>
        Skip
      </div>
      <h1 className="title">Profile details</h1>
      <div className="user_container">
        <div className="user_photo">
          {/* Componente de upload de imagem */}
          <UploadButton
            options={{
              apiKey: "public_12a1yzf6raU4ee2CH84o9UJQfk7H",
              maxFileCount: 1,
            }}
            onComplete={handleImageUpload}
          >
            {({ onClick }) => (
              <>
                <img src={profileImage} alt="User" onClick={onClick} />
                <span className="import_photo">
                  <i className="pi pi-camera"></i>
                </span>
              </>
            )}
          </UploadButton>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Campo de entrada para o primeiro nome */}
          <div className="input_group">
            <span className="span">First name</span>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>

          {/* Campo de entrada para o último nome */}
          <div className="input_group">
            <span className="span">Last name</span>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>

          {/* Seleção de data de nascimento */}
          <div className="choose_date">
            <DatePicker
              selected={birthdate}
              onChange={handleSaveDate}
              className="date_picker_input"
              placeholderText="Choose birthday date"
            />
          </div>

          {/* Botão de confirmação para enviar o formulário */}
          <button type="submit" className="confirm_button">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default BasicInfoPage;
