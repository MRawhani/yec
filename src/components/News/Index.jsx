import React from "react";
import NewsSlider from "./NewsSlider";

export default function Index() {
  return (
    <div id="news" className="news  ">
     <div className="container news__wrapper">

    <h1>Latest <strong>News</strong></h1>

    <NewsSlider />
     </div>
     </div>
  );
}
