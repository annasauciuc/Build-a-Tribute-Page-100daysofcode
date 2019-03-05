import React, { Component } from "react";

import "./Header.css";
import code from './images/20h.jpg'

class Header extends Component {
  render() {
    return (
      <div className="row  mb-5">
        <div className="col-sm-12 text-center" >
          {" "}
          <h1>You, just try!</h1>
        </div>

        <div className="col-sm-12 d-flex justify-content-center" >
          <img src={code} alt=" code view" />
        </div>
      </div>
    );
  }
}

export default Header;
