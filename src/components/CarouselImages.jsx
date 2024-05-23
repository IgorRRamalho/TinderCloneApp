import React from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css"; // Escolha o tema desejado
import "primereact/resources/primereact.min.css"; // CSS do PrimeReact
import "primeicons/primeicons.css"; // Ícones do PrimeIcons

const CarouselImages = () => {
  const images = [
    { src: "https://s3-alpha-sig.figma.com/img/1fdb/de76/51f07ad5f337cca883a0fd75e816082b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtqEJ2vRNHP6-hRDTtmlBqH4StLvH97eEhKiGMWcSUlYlhInMxLWiW9sT2YwcJ19bC-myCdHUeXkC80R1xjw6lIKxDY6bULAw8KJ0qeIYLlSP4JOFDHV26yQITBK7A26fxmW7fRpPK3jUkNAi4J7kvkjlllSLf6ABcWNd0Cjdmp~NUoau~T-hNXtpUyZniNF9tl4MR82r114-nIFnppyOt~4eeO~uBDTj1Kuu~Q0j2QULUSdqxQEanCLYh~0Bu69~w5lpdJl799pVJhhRMzESmvldHf~4iPvK1IC0rGACPI5fiaxff~vTzLG6QBdWd23WkMkAZfxcGpTvWA6VHeiqw__", alt: "Image 1" },
    {
      src: "https://s3-alpha-sig.figma.com/img/ebc6/e431/4988bca6ae0d9adffd4a515ca1b1afc6?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxU0h9LIgzi3iy-eYlDF3QiFR~6l4xdi7lTR43~JYZPd9O9pt-Yrw805xsBbvt5mkD~juD9joc5XijX6mspVDDV2LfCG7QMjnqR4vd4BOtRc2eYD7TtGo-dRmxNwvC56tr-haqMxY~QLg~sYfAK3IfqgbHdz76WjKl6ItS7PHMVYaVZJGGgvb0Jyb29iobpc4GoS1gT756pxDiFXPqgfInCQ9Y0hiH~rLFLg20hRcDUUPchjhVBmHD9~~uynBbZaISbePlnAlI37lHwm02uMYRLHvBrOShTkRR6eBzOzGxJfwPjkWj~h~DHSVSmoWRmiCzxtkc5lKm-SV2Iid9Dhew__",
      alt: "Image 2",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/1943/faa0/2496076cb075871aae65e1767b206779?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fdv47A72Sxmx2ULHHsSfXba1V4GZqxoVwTZGcv-XGKWo-XWX5FlKM6YVyKTqHaMbiiuYDeUyu8DJxDv~mvdykYSgDLwBhFcjxNmtmHAGLHkpkqE~31TITaE7WYcyWiRxL60Jjvh-NMAukdObzNADE6~nh58VQNIWcIWYVrtifKBp6YGgmCpDxHfut75pMb9~753FDWDdSXgI1gFOAyFNzx5Kp5KfmTfL3Iu6~3mr~Y41VbIDDvGz~HrO-qsqp2T7O839bsnb2DM7kVx4tweLSWzJAv~2j9Qir30lZjjPxg-0~PWareorDO7PH1I1txLcpc~38rGj-hJy3yH3aPq-wQ__",
      alt: "Image 3",
    },
  ];

  const imageTemplate = (image) => {
    return (
      <div className="carousel-item">
        <img
          src={image.src}
          alt={image.alt}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  };

  return (
    <div className="onboarding-carousel">
      <Carousel
        value={images}
        itemTemplate={imageTemplate}
        numVisible={1}
        numScroll={1}
        className="custom-carousel" circular
        autoplayInterval={3000} 
      />
    </div>
  );
};

export default CarouselImages;
