import React, { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { handleAddUser } from "../../../../contexts/controllers/userController";
import "./InterestsPage.css";

const passions = [
  "Photography",
  "Shopping",
  "Karaoke",
  "Yoga",
  "Cooking",
  "Tennis",
  "Run",
  "Swimming",
  "Art",
  "Traveling",
  "Extreme",
  "Music",
  "Drink",
  "Video games",
];

const InterestsPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [selectedPassions, setSelectedPassions] = useState(
    user.preferences.passions || []
  );

  const handlePassionClick = (passion) => {
    if (selectedPassions.includes(passion)) {
      setSelectedPassions(selectedPassions.filter((p) => p !== passion));
    } else if (selectedPassions.length < 5) {
      setSelectedPassions([...selectedPassions, passion]);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setUser({
      ...user,
      preferences: {
        ...user.preferences,
        passions: selectedPassions,
      },
    });

    try {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          passions: selectedPassions,
        },
      };

      await handleAddUser(updatedUser);
      navigate("/main"); // Navegar para a página de sucesso ou próxima etapa
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };
  return (
    <div className="container-page">
      <div className="nav_buttons">
        <span className="back-btn" onClick={() => navigate("/preferences")}>
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
        <span className="skip-btn" onClick={() => navigate("/main")}>
          Skip
        </span>
      </div>

      <div className="content_text">
        <h2>Your interests</h2>
        <p>
        Select a few of your interests and let everyone know what you’re passionate about.
        </p>
      </div>

      <div className="passions-grid">
        {passions.map((passion) => (
          <button
            key={passion}
            className={`passion-button ${
              selectedPassions.includes(passion) ? "selected" : ""
            }`}
            onClick={() => handlePassionClick(passion)}
          >
            {passion}
          </button>
        ))}
      </div>
      <p>{`You have selected ${selectedPassions.length} interest(s)`}</p>

      <button
        className="confirm_button"
        onClick={handleClick}
        disabled={selectedPassions.length !== 5}
      >
        Continue
      </button>
    </div>
  );
};

export default InterestsPage;
