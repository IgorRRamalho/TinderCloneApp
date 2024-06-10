import React, { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "./Location.css";

const LocationPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pais: "Brasil",
    cep: "",
    cidade: "",
    uf: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validaForm = () => {
    const newErrors = {};
    if (!formData.cep) newErrors.cep = "CEP é obrigatório";
    if (!formData.cidade) newErrors.cidade = "Cidade é obrigatória";
    if (!formData.uf) newErrors.uf = "UF é obrigatório";
    return newErrors;
  };

  const BuscaEnd = async (cep) => {
    try {
      setLoading(true);
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        alert("CEP não encontrado");
      } else {
        setFormData((prevData) => ({
          ...prevData,
          logradouro: data.logradouro,
          cidade: data.localidade,
          uf: data.uf,
        }));
      }
    } catch (error) {
      alert("Erro ao buscar CEP");
    } finally {
      setLoading(false);
    }
  };

  const handleBlurCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      BuscaEnd(cep);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUser((prevUser) => ({
      ...prevUser,
      location: {
        ...prevUser.location,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validaForm();
    if (Object.keys(formErrors).length === 0) {
      setUser((prevUser) => ({
        ...prevUser,
        location: formData,
      }));
      navigate("/preferences");
    } else {
      setErrors(formErrors);
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
        <span className="skip-btn" onClick={() => navigate("/preferences")}>
          Skip
        </span>
      </div>

      <h2>Your location</h2>
      <form onSubmit={handleSubmit}>
        <div className="input_group">
          <span className="span">CEP:</span>
          <input
           name="cep"
           value={formData.cep}
           onChange={handleChange}
           onBlur={handleBlurCep}
           maxLength={8}
         />
         {errors.cep && <span>{errors.cep}</span>}
        </div>
        <div className="input_group">
          <span className="span">Cidade:</span>
          <input
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
        />
        {errors.cidade && <span>{errors.cidade}</span>}
        </div>
        <div className="input_group">
          <span className="span">UF:</span>
          <input
           name="uf"
           value={formData.uf}
           onChange={handleChange}
           maxLength={2}
         />
         {errors.uf && <span>{errors.uf}</span>}
        </div>
        <div>
          <br />
          <button className="confirm_button" type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LocationPage;
