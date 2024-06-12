import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import './ImageUploadPage.css';

const ImageUploadPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [images, setImages] = useState(user.photos || []);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      photos: images,
    });
    console.log("User data:", user);
    navigate("/main");
  };

  return (
    <div className="container-page">
      <h2>Upload Images</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} />
        <div className="image-preview">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Upload Preview ${index}`} />
          ))}
        </div>
        <button className="confirm_button" type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ImageUploadPage;
