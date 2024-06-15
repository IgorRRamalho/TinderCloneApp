import React, { useState, useEffect } from "react";
import "./profileCard.css";

const ProfileCard = ({ user }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imageObjects, setImageObjects] = useState([]);

  useEffect(() => {
    // Pré-carregar todas as imagens
    const images = [user.profile_photo, ...user.photos].map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });
    setImageObjects(images);
  }, [user]);

  if (!user || !imageObjects.length) {
    return <p>Loading...</p>;
  }

  const allPhotos = [user.profile_photo, ...user.photos];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex < allPhotos.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : allPhotos.length - 1
    );
  };

  return (
    <div className="profile-card">
      <div className="photo-container">
        <img
          src={allPhotos[currentPhotoIndex]}
          alt={`${user.name}`}
          className="profile-photo"
        />
      </div>
      <div className="profile-info">
        <h3>{`${user.name}, ${user.age}`}</h3>
        <div className="button-container">
          <button onClick={prevPhoto} className="nav-button prev-button">
            Prev
          </button>
          <button onClick={nextPhoto} className="nav-button next-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
