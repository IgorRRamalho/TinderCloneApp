import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../../../assets/user.png";
import "primeicons/primeicons.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../../../../contexts/UserContext";
import "./BasicInfoPage.css";
import { UploadButton } from "@bytescale/upload-widget-react";

const BasicInfoPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(
    user.profileImage || userImage
  );
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [birthdate, setBirthdate] = useState(
    user.birthdate ? new Date(user.birthdate) : null
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
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

  const generateEmail = (firstName, lastName) => {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@hotmail.com`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (birthdate) {
      const age = calculateAge(birthdate);
      const email = generateEmail(firstName, lastName);
      setUser((prevData) => ({
        ...prevData,
        name: `${firstName} ${lastName}`,
        age: age,
        email: email,
        profilePhoto: profileImage, // Enviando link da foto de perfil
      }));
      console.log(user)
      navigate("/gender");
    } else {
      console.error("Please choose your birthday date.");
    }
  };

  const handleSaveDate = (date) => {
    setBirthdate(date);
  };

  const handleImageUpload = (files) => {
    const imageUrl = files[0].fileUrl;
    setProfileImage(imageUrl);
  };

  return (
    <div className="main">
      <div className="skip" onClick={() => navigate("/gender")}>
        Skip
      </div>
      <h1 className="title">Profile details</h1>
      <div className="user_container">
        <div className="user_photo">
          <UploadButton
            options={{
              apiKey: "public_12a1yzf6raU4ee2CH84o9UJQfk7H",
              maxFileCount: 1,
            }}
            onComplete={handleImageUpload}
          >
            {({ onClick }) => (
              <>
                <img
                  src={profileImage}
                  alt="User"
                  onClick={onClick}
                />
                <span className="import_photo">
                  <i className="pi pi-camera"></i>
                </span>
              </>
            )}
          </UploadButton>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <span className="span">First name</span>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>

          <div className="input_group">
            <span className="span">Last name</span>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>

          <div className="choose_date">
            <DatePicker
              selected={birthdate}
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
