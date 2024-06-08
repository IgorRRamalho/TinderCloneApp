import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../../../assets/user.png";
import "primeicons/primeicons.css";
import CalendarModal from "../../../components/CalendarModal";
import { UserContext } from "../../../../contexts/UserContext";
import "./BasicInfoPage.css"; // Assumindo que você vai criar um arquivo CSS para estilização
import Calendar from 'react-calendar';

const BasicInfoPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/gender");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveDate = (date) => {
    setUser((prevData) => ({
      ...prevData,
      age: date,
    }));
    closeModal();
  };

  return (
    <div className="main">
      <div className="skip">Skip</div>
      <h1>Profile details</h1>
      <div className="user_container">
        <div className="user_photo">
          <img src={userImage} alt="User" />
          <span className="import_photo">
            <i className="pi pi-camera"></i>
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName || ""}
              onChange={handleChange}
              placeholder="First name"
            />
          </div>

          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName || ""}
              onChange={handleChange}
              placeholder="Last name"
            />
          </div>

          <div className="ChooseDate">
            <button type="button" onClick={openModal}>
              <i className="pi pi-calendar"></i> Choose birthday date
            </button>
            {user.age && (
              <p>Selected Date: {user.age.toLocaleDateString()}</p>
            )}
          </div>

          <button type="submit" className="confirm-button">Confirm</button>
        </form>
      </div>

      <CalendarModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSave={handleSaveDate}
      />
    </div>
  );
};

export default BasicInfoPage;
