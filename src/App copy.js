import React, { Component } from "react";

import Card from "./Card";
import data from "./data/data";
import logo from "./assets/logo.svg";
import ProcessCard from "./components/process/ProcessCard";
import websiteData from "./data/website-data";

// class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: websiteData.properties,
      property: websiteData.properties[0],
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: websiteData.properties[newIndex],
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: websiteData.properties[newIndex],
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div>
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === websiteData.properties.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          Prev
        </button>

        <div className="cols">
          <div className={`cards-slider active-slide-${property.index}`}>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${
                  property.index * (100 / properties.length)
                }%)`,
              }}
            > 
              {properties.map((property, i) => {
                return i  === this.state.property.index + 1 ? (
                  <ProcessCard key={property.index} next={true} item={property} />
                ) : i === this.state.property.index - 1 ? (
                  <ProcessCard key={property.index} prev={true} item={property} />
                ): <ProcessCard key={property.index}  item={property} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
