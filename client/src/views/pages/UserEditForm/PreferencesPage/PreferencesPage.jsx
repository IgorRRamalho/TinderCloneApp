import React, { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import "./Preferences.css"

const PreferencesPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [genderAttraction, setGenderAttraction] = useState(user.preferences.genderAttraction || "");
  const [ageRange, setAgeRange] = useState(user.preferences.ageRange || [18, 30]);
  const [maxDistance, setMaxDistance] = useState(user.preferences.maxDistance || 50);

  const handleChangeGender = (e) => {
    setGenderAttraction(e.target.value);
  };

  const handleChangeAgeRange = (event, newValue) => {
    setAgeRange(newValue);
  };

  const handleChangeMaxDistance = (event, newValue) => {
    setMaxDistance(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      preferences: {
        genderAttraction,
        ageRange,
        maxDistance,
      },
    });
    console.log("User data:", user);
    navigate("/interests");
  };

  return (
    <div className="container-page">
      <div className="nav_buttons">
        <span className="back-btn" onClick={() => navigate("/location")}>
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
        <span className="skip-btn" onClick={() => navigate("/interests")}>
          Skip
        </span>
      </div>

      <h2>Your Preferences</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Gender Attraction:
          <select value={genderAttraction} onChange={handleChangeGender} name="genderAttraction">
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="other">Other</option>
          </select>
        </label>
        
        <label>
          Age Range:
          <Box sx={{ width: 295 }}>
            <Slider
              value={ageRange}
              onChange={handleChangeAgeRange}
              valueLabelDisplay="auto"
              min={18}
              max={100}
              color="ff5a5f"
            />
          </Box>
        </label>

        <label>
          Maximum Distance (km):
          <Box sx={{ width: 295 }}>
            <Slider
              value={maxDistance}
              onChange={handleChangeMaxDistance}
              valueLabelDisplay="auto"
              min={1}
              max={500}
              color="ff5a5f"
            />
          </Box>
        </label>

        <button className="confirm_button" type="submit">Conclude</button>
      </form>
    </div>
  );
};

export default PreferencesPage;
