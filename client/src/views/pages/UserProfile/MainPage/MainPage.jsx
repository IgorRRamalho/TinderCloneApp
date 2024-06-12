import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../../../services/Api';
import './MainPage.css';

import foto from "../../../assets/premium-girl.png"

const MainPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
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
            <path
              d="M6 10.5a1.5 1.5 0 1 1 3 0h6a.5.5 0 0 1 0 1H9a1.5 1.5 0 1 1-3 0H1a.5.5 0 0 1 0-1h6zm-2-4a1.5 1.5 0 1 1 3 0h8a.5.5 0 0 1 0 1H7a1.5 1.5 0 1 1-3 0H1a.5.5 0 0 1 0-1h3zM2.5 1.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11z"
            />
          </svg>
        </span>
      </div>

      {users.length > 0 ? (
        <div className="profile-card">
          <img src={foto} alt={users[0].name} />
          <div className="profile-info">
            <h3>{users[0].firstName} {users[0].lastName}, {users[0].age}</h3>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="action-buttons">
        <button className="dislike-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1C3.582 1 0 4.582 0 9s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
        <button className="like-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-heart-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1C3.582 1 0 4.582 0 9s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4.5 5C3.67 5 3 5.671 3 6.5c0 .56.26 1.054.675 1.388C4.61 9.272 6.4 10.853 8 12.183c1.6-1.33 3.39-2.91 4.325-4.294A1.495 1.495 0 0 0 13 6.5C13 5.671 12.33 5 11.5 5c-.604 0-1.146.269-1.5.73-.354-.461-.896-.73-1.5-.73-.604 0-1.146.269-1.5.73C5.646 5.269 5.104 5 4.5 5z"
            />
          </svg>
        </button>
        <button className="superlike-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-star-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1C3.582 1 0 4.582 0 9s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
