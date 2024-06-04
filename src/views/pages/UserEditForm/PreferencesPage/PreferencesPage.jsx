import React, { useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { addUser, getUsers } from '../../../../models/User';

const PreferencesPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      preferences: {
        ...user.preferences,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend
    console.log('User data:', user);
    navigate('/passions');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Gênero Preferido:
        <input type="text" name="genderPreference" value={user.preferences.genderPreference} onChange={handleChange} />
      </label>
      <label>
        Faixa Etária:
        <input type="text" name="ageRange" value={user.preferences.ageRange} onChange={handleChange} />
      </label>
      <label>
        Distância:
        <input type="text" name="distance" value={user.preferences.distance} onChange={handleChange} />
      </label>
      <button type="submit">Concluir</button>
    </form>
  );
};

export default PreferencesPage;
