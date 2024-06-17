import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { handleAddSwipe } from "../../../../contexts/controllers/swipeController";
import { handleGetPotentialMatches } from "../../../../contexts/controllers/userController";
import ProfileCard from "../../../components/Profile Card/ProfileCard";
import "./MainPage.css";

import deslike from "./dislike.png";
import like from "./like.png";
import superlike from "./superlike.png";
import noUsersIcon from "./no-user.png"; // Ícone para quando não há mais usuários

const MainPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [potentialMatches, setPotentialMatches] = useState([]);
  const [animating, setAnimating] = useState(false);

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
    handleAddSwipe({ swiperId: userId, swipedUserId, swipeChoice }).catch((error) => {
      console.error("Erro ao realizar swipe:", error);
    });
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
        <ProfileCard
          user={potentialMatches[0]}
          className={`profile-card ${animating ? "exit" : "enter"}`}
        />
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

      <div className="fotter_buttons">
        <NavLink to="/" exact activeClassName="active" className="mainScreen">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="9.49905"
              y="4.49756"
              width="13"
              height="18"
              rx="2"
              fill="#E94057"
              stroke="#F3F3F3"
            />
            <rect
              x="0.391632"
              y="4.48901"
              width="13"
              height="18"
              rx="2"
              transform="rotate(-15 0.391632 4.48901)"
              fill="#E94057"
              stroke="#F3F3F3"
            />
          </svg>
        </NavLink>
        <NavLink
          to={`/match/${userId}`}
          activeClassName="active"
          className="matches"
        >
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 4C4.46244 4 2 6.46245 2 9.5C2 15 8.5 20 12 21.1631C15.5 20 22 15 22 9.5C22 6.46245 19.5375 4 16.5 4C14.6398 4 12.9953 4.92345 12 6.3369C11.0047 4.92345 9.36015 4 7.5 4Z"
              fill="#ADAFBB"
              stroke="#ADAFBB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="20"
              cy="6"
              r="5"
              fill="#E94057"
              stroke="#F3F3F3"
              strokeWidth="2"
            />
          </svg>
        </NavLink>
        <NavLink
          to={`/user/${userId}`}
          activeClassName="active"
          className="userInformation"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.56701 13.933 3 12 3C10.067 3 8.5 4.56701 8.5 6.5C8.5 8.433 10.067 10 12 10Z"
              fill="#ADAFBB"
              stroke="#ADAFBB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 20.4V21H21V20.4C21 18.1598 21 17.0397 20.5641 16.184C20.1806 15.4314 19.5686 14.8195 18.816 14.436C17.9603 14 16.8402 14 14.6 14H9.4C7.1598 14 6.0397 14 5.18405 14.436C4.43139 14.8195 3.81947 15.4314 3.43598 16.184C3 17.0397 3 18.1598 3 20.4Z"
              fill="#ADAFBB"
              stroke="#ADAFBB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default MainPage;
