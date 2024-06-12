import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../../../assets/user.png";
import "primeicons/primeicons.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../../../../contexts/UserContext";
import "./BasicInfoPage.css";

const BasicInfoPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(
    user.age ? new Date(user.age) : null
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate) {
      const age = calculateAge(startDate);
      setUser((prevData) => ({
        ...prevData,
        age: age,
      }));
    }
    navigate("/gender");
  };

  const handleSaveDate = (date) => {
    setStartDate(date);
    setUser((prevData) => ({
      ...prevData,
      age: date,
    }));
    setIsModalOpen(false);
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
            <DatePicker
              selected={startDate}
              onChange={handleSaveDate}
              className="date_picker_input"
              placeholderText="Choose birthday date"
            />
          </div>

          <button type="submit" className="confirm_button">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default BasicInfoPage;
