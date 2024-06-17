import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleAddSwipe } from "../../../../contexts/controllers/swipeController";
import { handleGetPotentialMatches } from "../../../../contexts/controllers/userController";
import ProfileCard from "../../../components/Profile Card/ProfileCard";
import "./MainPage.css";

import MainFotter from "../../../components/MainFotter/MainFotter";
import deslike from "./dislike.png";
import like from "./like.png";
import noUsersIcon from "./no-user.png"; 
import superlike from "./superlike.png";


/*
========================================================================
  Página Principal - Swipe de Usuários
  
  Esta página permite ao usuário navegar e interagir com potenciais matches.
  
  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.8
========================================================================
*/

const MainPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [potentialMatches, setPotentialMatches] = useState([]);

  useEffect(() => {
    const fetchPotentialMatches = async () => {
      try {
        const matches = await handleGetPotentialMatches(userId);
        setPotentialMatches(matches);
      } catch (error) {
        console.error("Erro ao buscar matches potenciais:", error);
      }
    };

    fetchPotentialMatches();
  }, [userId]);

  const handleSwipeAction = (swipedUserId, swipeChoice) => {
    setPotentialMatches((prevMatches) => prevMatches.slice(1)); // Remove o perfil atual dos matches imediatamente

    // Processa o swipe em segundo plano
    handleAddSwipe({ swiperId: userId, swipedUserId, swipeChoice }).catch(
      (error) => {
        console.error("Erro ao realizar swipe:", error);
      }
    );
  };

  return (
    <div className="discover-page">
      <div className="nav_buttons">
        <span className="back-btn" onClick={() => navigate("/interests")}>
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
        <span className="filter-btn" onClick={() => navigate("/filter-page")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-filter"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a1.5 1.5 0 1 1 3 0h6a.5.5 0 0 1 0 1H9a1.5 1.5 0 1 1-3 0H1a.5.5 0 0 1 0-1h6zm-2-4a1.5 1.5 0 1 1 3 0h8a.5.5 0 0 1 0 1H7a1.5 1.5 0 1 1-3 0H1a.5.5 0 0 1 0-1h3zM2.5 1.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11z" />
          </svg>
        </span>
      </div>

      {potentialMatches.length > 0 ? (
        <ProfileCard user={potentialMatches[0]} />
      ) : (
        <div className="no-more-users">
          <img src={noUsersIcon} alt="No more users" />
          <p>Não há mais usuários a se mostrar</p>
        </div>
      )}

      <div className="action-buttons">
        {potentialMatches.length > 0 && (
          <>
            <img
              src={deslike}
              alt="Dislike"
              className="Dislike"
              onClick={() => handleSwipeAction(potentialMatches[0].id, false)}
            />
            <img
              src={like}
              alt="Like"
              className="Like"
              onClick={() => handleSwipeAction(potentialMatches[0].id, true)}
            />
            <img
              src={superlike}
              alt="SuperLike"
              className="SuperLike"
              onClick={() => handleSwipeAction(potentialMatches[0].id, true)}
            />
          </>
        )}
      </div>

      <MainFotter userId={userId} activeScreen="main" />
    </div>
  );
};

export default MainPage;
