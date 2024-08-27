import React, { useState } from "react";
import "../Slideshow.css" // Import the CSS file

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    {
      src: "https://images.pexels.com/photos/27076936/pexels-photo-27076936/free-photo-of-trees-by-the-lake-in-a-mountain-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Caption One",
    },
    {
      src: "https://images.pexels.com/photos/1671479/pexels-photo-1671479.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Caption Two",
    },
    {
      src: "https://images.pexels.com/photos/23857956/pexels-photo-23857956/free-photo-of-hill-by-the-shore-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Caption Three",
    },
  ];

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > slides.length) newIndex = 1;
    if (newIndex < 1) newIndex = slides.length;
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${slideIndex === index + 1 ? "active" : ""}`}
          style={{ display: slideIndex === index + 1 ? "block" : "none" }}
        >
          <div className="numbertext">{`${index + 1} / ${slides.length}`}</div>
          <img src={slide.src} alt={`Slide ${index + 1}`} />
          <div className="text">{slide.caption}</div>
        </div>
      ))}

      <div id="btnController">
        <button className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>
      </div>

      <br />

      <div id="btnDot">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
