import React from "react";
import Slider from "react-slick";
import Reviews from "./Reviews";

export default function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <Reviews review="Medpau really saves me time and effort. They are exactly what our business has been lacking. Wow, what great service!" reviewer="Handy Kali" reviewerWork="" />
      </div>
      <div className="item">
        <Reviews review="We have patronised MedPau since the last three years. And all we can say is, they are the best in the industry." reviewer="Samuel Umahi" reviewerWork="CEO" />
      </div>
      <div className="item">
        <Reviews review="Your team is great. They truly understand the equipment 100%. It's worth doing business with you." reviewer="Love Grace" reviewerWork="" />
      </div>
      <div className="item">
        <Reviews review="We have patronised MedPau since the last three years. And all we can say is, they are the best in the industry." reviewer="Samuel Umahi" reviewerWork="CEO" />
      </div>
     
    </Slider>
  );
}
