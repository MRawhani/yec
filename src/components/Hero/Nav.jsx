import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Nav extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 0;
      const nav = document.getElementById("nav");
      if (isTop) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <header id="nav" className="container header">
        <a href="#" className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-02.svg`}
            alt="Background of hero yce"
            className={``}
          />
        </a>
        <ul>
          <li>
            {/* <a href="#">HOME</a> */}
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="process"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PROCESS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="news"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              NEWS
            </Link>
          </li>
         
          <li>
            <Link
              activeClass="active"
              to="profiles"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PANEL
            </Link>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                this.props.onRegisterClick();
              }}
              href="#"
            >
              REGISTER
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
