import React, { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import "primereact/resources/themes/saga-blue/theme.css"; // Selecione o tema adequado
import "primereact/resources/primereact.min.css"; // CSS do PrimeReact
import "primeicons/primeicons.css"; // Ícones do PrimeReact

const GenderPage = () => {
  const options = [
    { label: "Woman", value: "woman" },
    { label: "Man", value: "man" },
    { label: "Choose another", value: "another" },
  ];
  const [gender, setGender] = useState(options[0].value);

  const handleChange = (e) => {
    setGender(e.value);
    console.log("Selected Gender:", e.value); // Log para verificar o gênero selecionado
  };

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
    </>
  );
};

export default GenderPage;
