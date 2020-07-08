import React from "react";
import websiteData from "../../data/website-data";
import ProcessCard from "../process/ProcessCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Index extends React.Component {
    next=()=> {
        this.slider.slickNext();
      }
      previous=()=> {
        this.slider.slickPrev();
      }
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    // centerMode: true,
      adaptiveHeight: true,
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
      <div id="process" className="process">
        <div className="section-header ">
          <h1 className="section-header__back">The Competition Process</h1>
        
        </div>
          <div className="arrows">
            <img
              src={`${process.env.PUBLIC_URL}/images/elements/arrow-next.svg`}
              alt="arrow next"
              className={`arrows__next`}
              onClick={this.next}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/elements/arrow-prev.svg`}
              alt="arrow prev"
              className={`arrows__prev`}
              onClick={this.previous}

            />
          </div>
        <div className="wrapper d-flex">
        <h1 className="section-header__front">
            The <br /> Competition <br /> <strong>Process</strong>
          </h1>
        <div className="wrapper process__wrapper">
          {/* <div className="process__active"> Single Item</div>   */}
          <Slider ref={c => (this.slider = c)} {...settings}>
            {websiteData.properties.map((item, i) => (
              <ProcessCard   key={i} item={item} />
            ))}
          </Slider>
        </div>
  
        </div>
            </div>
    );
  }
}
