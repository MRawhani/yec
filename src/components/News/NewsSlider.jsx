import React from "react";
import websiteData from "../../data/website-data";
import ProcessCard from "../process/ProcessCard";
import NewsCard from "./NewsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/elements/arrow-prev.svg`}
      alt="arrow prev"
      className={className}
      style={{ ...style, width: "70px", height: "auto" ,left:"-80px"}}
      onClick={onClick} 
    /> //position:'relative',left:"-40px"
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/elements/arrow-next.svg`}
      alt="arrow next"
      className={className}
      style={{ ...style, width: "70px", height: "auto" }}
      onClick={onClick}
    />
  );
}
export default class NewsSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,

      slidesToShow: 2,
      slidesToScroll: 1,

      speed: 1000,

      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,

      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
          {websiteData.blogs.map((item, i) => (
            <NewsCard   key={i} item={item} />
          ))}
        </Slider>
      </div>
    );
  }
}
