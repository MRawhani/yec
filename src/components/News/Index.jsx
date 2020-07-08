import React from "react";
import NewsSlider from "./NewsSlider";

export default class Index extends React.Component {
 
  render(){
    return (
      <div id="news" className="news  ">
        
       <div className="wrapper news__wrapper">
  
      <h1>Latest <strong>News</strong></h1>
  
      <NewsSlider  />
       </div>
       </div>
    );
  }
}
