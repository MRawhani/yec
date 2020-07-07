import React, { Component } from "react";
import HeroIndex from "./Hero/Index";
import About from "./About/Index";
import Process from "./ProcessSection/Index";
import Apply from "./Apply/Index";
import Sponsors from "./Sponsors/Index";
import News from "./News/Index";
import Profiles from "./Profiles/Index";
import Footer from "./Footer/Index";

export default class Main extends Component {
  render() {
    return (
      <div
        className="body"
        style={{
          background: `url(${process.env.PUBLIC_URL}/images/elements/background-01.svg)`,
        }}
      >
        <div className="container container-fluid">
          <HeroIndex />
          <About />
          <Process />
          <Apply />
          <Sponsors />
          <News />
          <Profiles />
          <Footer />
      
        </div>
      </div>
    );
  }
}
