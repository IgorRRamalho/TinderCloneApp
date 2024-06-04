// src/components/PassionsPage/PassionsPage.js
import React, { useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { handleAddUser } from '../../../../controllers/userController';

const PassionsPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await handleAddUser(user);
      navigate("/main"); // Navegar para a página de sucesso ou próxima etapa
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  return (
    <>
      <h1>Your interests</h1>
      <p>Select a few of your interests and let everyone know what you’re passionate about.</p>
      <p>Preferencias aqui ....</p>
      <button onClick={handleClick}>Continue</button>
    </>
  );
};

export default PassionsPage;
