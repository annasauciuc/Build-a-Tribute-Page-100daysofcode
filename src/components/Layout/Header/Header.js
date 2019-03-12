import React, { Component } from "react";

import "./Header.css";
import personal from "../../../images/tech1.jpg";

import SearchBox from "../../Navigation/SearchBox/SearchBox";

class Header extends Component {
  getProgressClass(progress) {
    return ` text-center   pl-3 filler `;
  }

  render() {
    const { progress } = this.props;
    console.log("peogress :", progress);

    return (
      <React.Fragment>
        <header>
          <div className="row   mb-5">
            <div className="col-sm-12 mt-5   text-center">
              {" "}
              <h1 className="title ">You, just try!</h1>
              <h3>&#x3c;100 Days of Code/></h3>
            </div>

            <div className="col-sm-12 mt-3 mb-5 d-flex justify-content-center">
              <img src={personal} alt=" code view" />
            </div>
            <blockquote className="text-center mt-5 font-weight-normal  w-100 h1"> <i> Stay passionate and you will thrive, i am sure!</i></blockquote>
          </div>
        </header>
        <div className="progress mt-5 mx-auto w-50">
          <div
            style={{ width: progress + "%" }}
            className={this.getProgressClass(progress)}
            role="progressbar"
          >
            {progress}% Complete
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
