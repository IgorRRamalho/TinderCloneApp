/*
========================================================================
  Página de Perfil do Usuário
  
  Esta página exibe o perfil de um usuário.
  
  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.8
========================================================================
*/
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../../../../contexts/UserIdContext";
import { getUsers } from "../../../../services/userService"; // Importa a função para buscar usuários do serviço
import MainFooter from "../../../components/MainFotter/MainFotter"; // Componente de rodapé principal
import "./UserProfilePage.css"; // Estilos específicos para a página de perfil do usuário

const UserProfilePage = () => {
  const navigate = useNavigate(); // Hook de navegação do React Router
  const { userId } = useContext(UserIdContext);
  const [user, setUser] = useState(null); // Estado para armazenar os dados do usuário

  // Efeito para buscar o usuário ao montar o componente
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const usersData = await getUsers(); // Chama a função para buscar os usuários
        const selectedUser = usersData.find((user) => user.id === userId); // Encontra o usuário com base no userId
        setUser(selectedUser); // Atualiza o estado com os dados do usuário encontrado
      } catch (error) {
        console.error("Erro ao buscar usuário:", error); // Trata erros de busca de usuário
      }
    };

    fetchUser(); // Chama a função para buscar o usuário ao montar o componente
  }, [userId]); // Dependência do useEffect: userId, para atualizar quando o ID do usuário mudar

  // Renderiza uma mensagem de carregamento enquanto o usuário é carregado
  if (!user) {
    return <div>Loading...</div>;
  }

  // Renderiza a página de perfil do usuário com os dados obtidos
  return (
    <div className="container-page">
      <h2>{user.name}</h2> {/* Nome do usuário */}
      <p>{user.bio}</p> {/* Biografia do usuário */}
      <div className="image-gallery">
        {user.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`User Photo ${index}`} /> // Renderiza as fotos do usuário
        ))}
      </div>
      <MainFooter activeScreen="user" />{" "}
      {/* Rodapé principal com o ID do usuário */}
    </div>
  );
};

export default UserProfilePage;
