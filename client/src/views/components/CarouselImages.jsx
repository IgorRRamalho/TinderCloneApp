import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carouselStyles.css"; // Importando os estilos personalizados
import image1 from "../assets/algorithm-girl.png";
import image2 from "../assets/matches-girl.png";
import image3 from "../assets/premium-girl.png";


/*
========================================================================
  Componete de Carrousel
  
  Este componente é responsavel por gerar o carrosel com as imagens
  e as legendas
  
  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.5
========================================================================
*/



const CarouselImages = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={80}
      >
        <div className="item-carrosel">
          <img src={image1} alt="Algorithm" className="carousel-image" />
          <div className="legend">
            <h3>Algorithm</h3>
            <p>
              Users go through a vetting process to ensure you never match with
              bots.
            </p>
          </div>
        </div>
        <div className="item-carrosel">
          <img src={image2} alt="Matches" className="carousel-image" />
          <div className="legend">
            <h3>Matches</h3>
            <p>
              We match you with people that have a large array of similar
              interests.
            </p>
          </div>
        </div>
        <div className="item-carrosel">
          <img src={image3} alt="Premium" className="carousel-image" />
          <div className="legend">
            <h3>Premium</h3>
            <p>
              Sign up today and enjoy the first month of premium benefits on us.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImages;
