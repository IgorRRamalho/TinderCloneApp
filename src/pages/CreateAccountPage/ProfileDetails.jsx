import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import user from "../../assets/user.png";
import "primeicons/primeicons.css";
import CalendarModal from "../../components/CalendarModal";

export default function ProfileDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthday: null,
  });

  const navigate = useNavigate(); // Instanciar o hook useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviandooo", formData);
    navigate("/gender"); // Navegar para a página de gênero
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveDate = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      birthday: date,
    }));
  };

  return (
    <div className="main">
      <h1>Profile details</h1>
      <div className="user_container">
        <div className="user_photo">
          <img src={user} alt="User" />
          <span className="import_photo">
            <i className="pi pi-camera"></i>
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </div>

          <div className="ChooseDate">
            <span className="calendar">
              <i className="pi pi-calendar"></i>
            </span>
            <button type="button" onClick={openModal}>
              Choose birthday date

              
            </button>
            {formData.birthday && <p>Selected Date: {formData.birthday.toLocaleDateString()}</p>}
          </div>

          <button type="submit">Confirm</button>
        </form>
      </div>

      <CalendarModal isOpen={isModalOpen} onRequestClose={closeModal} onSave={handleSaveDate} />
    </div>
  );
}
