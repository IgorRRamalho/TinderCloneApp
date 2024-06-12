import  React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { handleAddUser } from "../../../../contexts/controllers/userController";
import "./InterestsPage.css";

// Supondo que você ainda tenha acesso aos dados de interesse, mesmo que importados de um JSON
import interestsData from "./TinderCloneDB.Interests.json";

const InterestsPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [selectedInterests, setSelectedInterests] = useState(
    user.interests || []
  );

  useEffect(() => {
    // Atualizar interesses selecionados ao carregar a página, se houver dados do usuário
    setSelectedInterests(user.interests || []);
  }, [user]);

  const handleInterestClick = (interestId) => {
    if (selectedInterests.includes(interestId)) {
      setSelectedInterests(selectedInterests.filter((id) => id !== interestId));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interestId]);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setUser({
      ...user,
      interests: selectedInterests,
    });

    try {
      const updatedUser = {
        ...user,
        interests: selectedInterests,
      };
      console.log(updatedUser)
      await handleAddUser(updatedUser);
      navigate("/main"); // Navegar para a página de sucesso ou próxima etapa
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  return (
    <div className="container-page">
      <div className="nav_buttons">
        <span className="back-btn" onClick={() => navigate("/gender")}>
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
        <span className="skip-btn" onClick={() => navigate("/main")}></span>
      </div>

      <div className="content_text">
        <h2>Your interests</h2>
        <p>
          Select a few of your interests and let everyone know what you’re
          passionate about.
        </p>
      </div>

      <div className="passions-grid">
        {interestsData.map((interest) => (
          <button
            key={interest._id.$oid}
            className={`passion-button ${
              selectedInterests.includes(interest._id.$oid) ? "selected" : ""
            }`}
            onClick={() => handleInterestClick(interest._id.$oid)}
          >
            {interest.name}
          </button>
        ))}
      </div>
      <p>{`You have selected ${selectedInterests.length} interest(s)`}</p>

      <button
        className="confirm_button"
        onClick={handleClick}
        disabled={selectedInterests.length !== 5}
      >
        Continue
      </button>
    </div>
  );
};

export default InterestsPage;
