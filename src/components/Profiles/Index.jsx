import React from "react";
import ProfileCard from "./ProfileCard";

export default function Index() {
  return (
    <div id="profiles" className="profiles  "
    style={{
      background: `url(${process.env.PUBLIC_URL}/images/elements/profiles-2-01-01.svg) center no-repeat`,

     // height: "100vh",
    
      backgroundSize: "100%",


    }}
    >
     <div className="wrapper profiles__wrapper">
         <div className="circle circle-1"></div>
         <div className="circle circle-2"></div>
         <div className="circle circle-3"></div>
     <div className="section-header">
        <h1 className="section-header__back">Profiles</h1>
        <h1 className="section-header__front">Profiles</h1>
      </div>
      <div className="profiles__list">
      <ProfileCard/>
       <ProfileCard right/>
       <ProfileCard/>
       <ProfileCard right/>
           </div>
      
    
     </div>
     </div>
  );
}
