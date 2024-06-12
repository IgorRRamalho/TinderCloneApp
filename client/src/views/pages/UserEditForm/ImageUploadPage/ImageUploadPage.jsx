import { UploadButton } from "@bytescale/upload-widget-react";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
import "./ImageUploadPage.css";

const ImageUploadPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [images, setImages] = useState(user.photos || []);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const handleUploadComplete = (files) => {
    const newImages = files.map((file) => file.fileUrl);
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

  const uploadOptions = {
    apiKey: "public_12a1yzf6raU4ee2CH84o9UJQfk7H", // Your API key.
    maxFileCount: 1,
  };

  const goTomain = () => {
    navigate("/");
  };

  return (
    <div className="main">
      <div className="title">Upload Images</div>
      <div className="user_container">
        <form onSubmit={handleSubmit}>
          <div className="image-preview">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Upload Preview ${index}`} />
            ))}
          </div>
          <UploadButton
            options={uploadOptions}
            onComplete={handleUploadComplete}
          >
            {({ onClick }) => (
              <button type="button" className="upload-button" onClick={onClick}>
                Upload
              </button>
            )}
          </UploadButton>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <button className="confirm-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="footer" onClick={goTomain}>
        <a href="#">Terms of use</a>
        <a href="">Privacy Policy</a>
      </div>
    </div>
  );
};

export default ImageUploadPage;
