import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../../../assets/user.png";
import "primeicons/primeicons.css";
import CalendarModal from "../../../components/CalendarModal";
import { UserContext } from "../../../../contexts/UserContext";

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
    <>
      <div className="main">
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
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={user.firstName || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName || ""}
                onChange={handleChange}
              />
            </div>

            <div className="ChooseDate">
              <span className="calendar">
                <i className="pi pi-calendar"></i>
              </span>
              <button type="button" onClick={openModal}>
                Choose birthday date
              </button>
              {user.age && (
                <p>Selected Date: {user.age.toLocaleDateString()}</p>
              )}
            </div>

            <button type="submit">Confirm</button>
          </form>
        </div>

        <CalendarModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          onSave={handleSaveDate}
        />
      </div>
    </>
  );
};

export default BasicInfoPage;
