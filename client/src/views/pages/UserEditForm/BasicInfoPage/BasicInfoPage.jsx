import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../../../assets/user.png";
import "primeicons/primeicons.css";
import CalendarModal from "../../../components/Calendar/CalendarModal";
import { UserContext } from "../../../../contexts/UserContext";
import "./BasicInfoPage.css";

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
      <div className="skip" onClick={() => navigate("/gender")}>
        Skip
      </div>
      <h1 className="title">Profile details</h1>
      <div className="user_container">
        <div className="user_photo">
          <img src={userImage} alt="User" />
          <span className="import_photo">
            <i className="pi pi-camera"></i>
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <span className="span">First name</span>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="input_group">
            <span className="span">Last name</span>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="choose_date">
            <button type="button" className="date_button" onClick={openModal}>
              <i className="pi pi-calendar"></i> Choose birthday date
            </button>
            {user.age && (
              <p className="selected_date">Selected Date: {user.age.toLocaleDateString()}</p>
            )}
          </div>

          <button type="submit" className="confirm_button">Confirm</button>
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
