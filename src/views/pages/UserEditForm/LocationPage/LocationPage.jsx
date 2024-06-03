import React, { useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const LocationPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      location: {
        ...user.location,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/preferences');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Latitude:
        <input type="text" name="lat" value={user.location.lat} onChange={handleChange} />
      </label>
      <label>
        Longitude:
        <input type="text" name="lng" value={user.location.lng} onChange={handleChange} />
      </label>
      <button type="submit">Próximo</button>
    </form>
  );
};

export default LocationPage;
