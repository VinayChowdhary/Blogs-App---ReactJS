import React, { Component } from "react";

export default class AboutUs extends Component {
  constructor() {
    super();
    console.log("Constructor");
    this.state = {
      viewType: "LIST",
      name: "",
      age: 0,
    };
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Class based component</h1>
        <button
          onClick={() => {
            this.setState({
              viewType: this.state.viewType === "LIST" ? "TILE" : "LIST",
            });
          }}
        >
          Click here to update the view Type
        </button>
        <p>{this.state.viewType}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("Component mounted");
    //used to write async logics/calls (API Calls)
  }
  componentDidUpdate() {
    console.log("Component updated");
    //comparison of props and state
  }
  componentWillUnmount() {
    console.log("component unmounted");
    //cleanup logic
  }
  // shouldComponentUpdate() {
  //   console.log("should component update");
  //   //decide whether to re render the component or not
  //   return true;
  // }
}

import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      
    </div>
  )
}

export default AboutUs

