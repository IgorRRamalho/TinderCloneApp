import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const CarouselImages = () => {
  useEffect(() => {
    // Optional: You can initialize the carousel manually if needed
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    if (carouselElement) {
      // Ensure the carousel is properly initialized
      new window.bootstrap.Carousel(carouselElement);
    }
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://s3-alpha-sig.figma.com/img/1fdb/de76/51f07ad5f337cca883a0fd75e816082b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtqEJ2vRNHP6-hRDTtmlBqH4StLvH97eEhKiGMWcSUlYlhInMxLWiW9sT2YwcJ19bC-myCdHUeXkC80R1xjw6lIKxDY6bULAw8KJ0qeIYLlSP4JOFDHV26yQITBK7A26fxmW7fRpPK3jUkNAi4J7kvkjlllSLf6ABcWNd0Cjdmp~NUoau~T-hNXtpUyZniNF9tl4MR82r114-nIFnppyOt~4eeO~uBDTj1Kuu~Q0j2QULUSdqxQEanCLYh~0Bu69~w5lpdJl799pVJhhRMzESmvldHf~4iPvK1IC0rGACPI5fiaxff~vTzLG6QBdWd23WkMkAZfxcGpTvWA6VHeiqw__"
            className="d-block w-100"
            alt="Algorithm"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Algorithm</h2>
            <p>
              Users going through a vetting process to ensure you never match
              with bots.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://s3-alpha-sig.figma.com/img/ebc6/e431/4988bca6ae0d9adffd4a515ca1b1afc6?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxU0h9LIgzi3iy-eYlDF3QiFR~6l4xdi7lTR43~JYZPd9O9pt-Yrw805xsBbvt5mkD~juD9joc5XijX6mspVDDV2LfCG7QMjnqR4vd4BOtRc2eYD7TtGo-dRmxNwvC56tr-haqMxY~QLg~sYfAK3IfqgbHdz76WjKl6ItS7PHMVYaVZJGGgvb0Jyb29iobpc4GoS1gT756pxDiFXPqgfInCQ9Y0hiH~rLFLg20hRcDUUPchjhVBmHD9~~uynBbZaISbePlnAlI37lHwm02uMYRLHvBrOShTkRR6eBzOzGxJfwPjkWj~h~DHSVSmoWRmiCzxtkc5lKm-SV2Iid9Dhew__"
            className="d-block w-100"
            alt="Matches"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Matches</h2>
            <p>
              We match you with people that have a large array of similar
              interests.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://s3-alpha-sig.figma.com/img/1943/faa0/2496076cb075871aae65e1767b206779?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fdv47A72Sxmx2ULHHsSfXba1V4GZqxoVwTZGcv-XGKWo-XWX5FlKM6YVyKTqHaMbiiuYDeUyu8DJxDv~mvdykYSgDLwBhFcjxNmtmHAGLHkpkqE~31TITaE7WYcyWiRxL60Jjvh-NMAukdObzNADE6~nh58VQNIWcIWYVrtifKBp6YGgmCpDxHfut75pMb9~753FDWDdSXgI1gFOAyFNzx5Kp5KfmTfL3Iu6~3mr~Y41VbIDDvGz~HrO-qsqp2T7O839bsnb2DM7kVx4tweLSWzJAv~2j9Qir30lZjjPxg-0~PWareorDO7PH1I1txLcpc~38rGj-hJy3yH3aPq-wQ__"
            className="d-block w-100"
            alt="Premium"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Premium</h2>
            <p>
              Sign up today and enjoy the first month of premium benefits on us.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselImages;
