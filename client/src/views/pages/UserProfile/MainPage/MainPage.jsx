import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../../services/Api";
import "./MainPage.css";
import ProfileCard from "../../../components/Profile Card/ProfileCard";

import foto from "../../../assets/premium-girl.png";
import like from "./like.png";
import deslike from "./dislike.png";
import superlike from "./superlike.png";

const MainPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
        if (usersData.length > 0) {
          console.log(usersData[0]);
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };
  
    fetchUsers();
  }, []);

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

      {users.length > 0 ? (
        <ProfileCard user={users[0]} />
      ) : (
        <p>Loading...</p>
      )}

      <div className="action-buttons">
        <img src={deslike} alt="Dislike" className="Dislike"/>

        <img src={like} alt="Like" className="Like"/>
        
        <img src={superlike} alt="SuperLike" className="SuperLike" />
      </div>

      <div className="fotter_buttons">
        <span className="back-btn" onClick={() => navigate("/interests")}>
          {/* SVG do botão de voltar */}
        </span>
        <span className="filter-btn" onClick={() => navigate("/filter-page")}>
          {/* SVG do botão de filtro */}
        </span>
      </div>
    </div>
  );
};

export default MainPage;
