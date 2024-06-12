import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers } from '../../../../services/Api';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const usersData = await getUsers();
        const selectedUser = usersData.find((user) => user.id === userId);
        setUser(selectedUser);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-page">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <div className="image-gallery">
        {user.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`User Photo ${index}`} />
        ))}
      </div>
      <button className="back-button" onClick={() => navigate('/main')}>Back to Main</button>
    </div>
  );
};

export default UserProfilePage;
