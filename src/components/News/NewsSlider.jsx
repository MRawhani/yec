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
      style={{ ...style, width: "70px", height: "auto",zIndex:'2' }}
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
  next=()=> {
    this.slider.slickNext();
  }
  previous=()=> {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      infinite: true, 

      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 1,

      speed: 500,
centerMode:true,
    //  nextArrow: <NextArrow />,
   //   prevArrow: <PrevArrow />,
   arrows:false,

      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
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
          <div className="arrows">
              <img
                src={`${process.env.PUBLIC_URL}/images/elements/Arrow_white_next.svg`}
                alt="arrow next"
                className={`arrows__next`}
                onClick={this.next}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/elements/Arrow_white_prev.svg`}
                alt="arrow prev"
                className={`arrows__prev`}
                onClick={this.previous}
  
              />
            </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {websiteData.blogs.map((item, i) => (
            <NewsCard   key={i} item={item} />
          ))}
        </Slider>
      </div>
    );
  }
}
