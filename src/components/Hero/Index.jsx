import React, { Component } from "react";
import Nav from "./Nav";
import SidePanel from "../Form/SidePanel";

export default class Index extends Component {
  constructor(){
    super();
    this.state = {
      style:"menu",
      menuStatus:"open"
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    switch(this.state.menuStatus)
    {
      case "open":
        this.setState({
          menuStatus:"close",
          style:"menu menu-active"
        });
        break;
      case "close":
        this.setState({
          menuStatus:"open",
          style:"menu"
        });
        break;
    }        
  }

  render() {
    return (
      <div
      id="home"
        className={`hero `}
        style={{
          background: `url(${process.env.PUBLIC_URL}/images/elements/dots-1.svg) center repeat-x`,

          height: "100vh",
          backgroundPosition: "bottom",
          backgroundSize: "100%",
	backgroundPositionX: "100px" 

        }}
      >
                    <Nav onRegisterClick={this.handleClick}/>

        {/* <img
            src={`${process.env.PUBLIC_URL}/images/elements/dots-1.svg`}
            alt="Background of hero yce"
            className={`hero__image`}
          />
          */}
        <div className="hero__content">
          <div className="conatiner">
            <h1 className="hero__title">Yemen</h1>
            <h2 className="hero__subtitle">Enterepnures Cup</h2>
            <p className="hero__description">Your Innovation and creative award.</p>
        <input onClick={this.handleClick} type="button" value="APPLY" className="cta-btn cta-btn--border "/>
          </div>
        </div>
        <SidePanel style={this.state.style} onClick={this.handleClick}/>
      </div>
    );
  }
}
