import React, { Component } from "react";

import "./Header.css";
import code from './images/laptopview.jpg'

class Header extends Component {
  render() {
    return (
      <div className="row  mb-5">
        <div className="col-sm-12 mt-5 text-white text-center" >
          {" "}
          <h1>You, just try!</h1>
          <h3>100 Days of Code</h3>
        </div>

        <div className="col-sm-12 d-flex justify-content-center" >
          <img src={code} alt=" code view" />
        </div>
      </div>
    );
  }
}

export default Header;
