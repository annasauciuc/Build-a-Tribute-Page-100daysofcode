import React, { Component } from "react";

import "./Header.css";
import personal from "../../../images/tech1.jpg";

import SearchBox from "../../Navigation/SearchBox/SearchBox";

class Header extends Component {
  getProgressClass(progress) {
    const width = { progress };

    return `${width} progress-bar progress-bar-info  pl-3 progress-bar-striped `;
  }

  render() {
    const { progress } = this.props;

    return (
      <React.Fragment>
        <header>
          <div className="row   mb-5">
            <div className="col-sm-12 mt-5  text-center">
              {" "}
              <h1 className="title">You, just try!</h1>
              <h3>&#x3c;100 Days of Code/></h3>
            </div>

            <div className="col-sm-12 mt-3 mb-5 d-flex justify-content-center">
              <img src={personal} alt=" code view" />
            </div>
            <div className="progress w-100">
              <div
                className={this.getProgressClass(progress)}
                role="progressbar"
              >
                {progress}% Complete (info)
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
