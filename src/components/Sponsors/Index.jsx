import React from "react";
import SponsorsSlider from "./SponsorsSlider";

export default function Index() {
  return (
    <div
    id="sponsors"
      className={` sponsors`}
   
    >
      <div className="container sponsors__wrapper">
      <div className="circle circle-1"></div>
         <div className="circle circle-2"></div>
         <div className="circle circle-3"></div>
     <div className="section-header">
        <h1 className="section-header__back">Sponsors</h1>
        <h1 className="section-header__front">Sponsors</h1>
      </div>
      <SponsorsSlider />
      </div>
    </div>
  );
}
