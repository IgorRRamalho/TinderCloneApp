import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./profileCard.css";

const ProfileCard = ({ user }) => {
  if (!user) {
    return <p>Loading...</p>;
  }

  const allPhotos = [user.profile_photo, ...user.photos];

  const settings = {
    dots: false,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="profile-card">
      <Slider {...settings}>
        {allPhotos.map((photo, index) => (
          <div key={index} className="photo-container">
            <img src={photo} alt={`${user.name}`} className="profile-photo" />
          </div>
        ))}
      </Slider>
      <div className="profile-info">
        <h3>{`${user.name}, ${user.age}`}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;
