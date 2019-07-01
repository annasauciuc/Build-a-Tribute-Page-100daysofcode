import React, { Component } from "react";

import "./Header.css";
import personal from "../../../images/tech1.jpg";

class Header extends Component {
  getProgressClass(progress) {
    return ` text-center   pl-3 progressFiller `;
  }

  render() {
    const { progress } = this.props;

    return (
      <React.Fragment>
        <header>
          <div  className="flex-wrap d-flex   mb-3">
            <div className="col-sm-12 mt-5   text-center">
              {" "}
              <h1 data-aos="zoom-in-down" className="headerTitle ">You, just try!</h1>
              <h3 data-aos="zoom-in-down" >&#x3c;100 Days of Code/></h3>
            </div>

            <div data-aos="zoom-in-down" className="col-sm-12 mt-1  d-flex justify-content-center">
              <img src={personal} alt=" code view" />
            </div>
            {/* <blockquote data-aos="zoom-in-down" className="headerBlockquote text-center font-weight-normal  w-100 h1">
              {" "}
              <i> Stay passionate and you will thrive, i am sure!</i>
            </blockquote> */}
          </div>
        </header>
        <section className="progress mx-auto w-50">
          <div
            style={{ width: progress + "%" }}
            className={this.getProgressClass(progress)}
            role="progressbar"
          >
            {progress}% Complete
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
