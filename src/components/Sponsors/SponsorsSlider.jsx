import React from "react";
import websiteData from "../../data/website-data";
import ProcessCard from "../process/ProcessCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class SponsorsSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,

      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      centerMode: true,

      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="sponsors-slider">
        <Slider {...settings}>
          {websiteData.sponsors.map((item, i) => (
            <div key={i}>
              <img
                src={`${item.imageUrl}`}
                style={{
                  height: "100px",
                  width: "100px",
                }}
                alt="sponsor"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
