import React, { useContext, useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import "primereact/resources/themes/saga-blue/theme.css"; // Selecione o tema adequado
import "primereact/resources/primereact.min.css"; // CSS do PrimeReact
import "primeicons/primeicons.css"; // Ícones do PrimeReact
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";

const GenderPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [gender, setGender] = useState(user.gender || "");

  const handleChange = (e) => {
    setGender(e.value);
    setUser({ ...user, gender: e.value });
  };

  const handleSubmit = () => {
    navigate('/location');
  };

  const options = [
    { label: "Woman", value: "woman" },
    { label: "Man", value: "man" },
    { label: "Choose another", value: "another" },
  ];

  return (
    <>
      <h2>I am a</h2>

      <div className="card flex justify-content-center">
        <SelectButton
          value={gender}
          onChange={handleChange}
          options={options}
          optionLabel="label"
          optionValue="value"
        />
      </div>

      <button onClick={handleSubmit}>Próximo</button>
    </>
  );
};

export default GenderPage;
