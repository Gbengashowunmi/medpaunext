import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 5500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <div className="overlay"></div>
        <div className="image">
          <Image width={900} height={900}
            className="d-block w-100"
            src="/images/her-bg-slider.jpg"
            alt="Second slide"
            
          />
        </div>
        <div className="details">
          <h1> WELCOME TO THE FUTURE OF HEALTH CARE IN AFRICA</h1>
          <h3> -The future is afordability</h3>
        </div>
      </div>
      <div className="carousel-item">
      <div className="overlay"></div>

        <div className="image">
          <Image width={900} height={900}
            className="d-block w-100"
            src="/images/hero-image11111.jpg"
            alt="Second slide"
          />
        </div>
        <div className="details">
          <h1> Our expertise at your Service</h1>
          <p>
            Medical equipment engineers design, develop, and maintain medical
            equipment to ensure safety and effectiveness.
          </p>
          {/* <button>Read More</button> */}
        </div>
      </div>

      <div className="carousel-item">
      <div className="overlay"></div>

        <div className="image">
          <Image width={900} height={900}
            className="d-block w-100"
            src="/images/hero_home_01.jpg"
            alt="First slide"
          />
        </div>
        <div className="details">
          <h1> We Sell Service, Excellent Service</h1>
          <p>
            Everyone of us from the least to the top understands that our
            customers are our greatest assets. That is why we empower them and
            help them rise above their challenges. We believe when they win, we
            win, everybody wins.
          </p>
          {/* <button>Read More</button> */}
        </div>
      </div>
    </Slider>
  );
}
