import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  getProgressClass(progress) {
    return ` text-center   pl-3 progressFiller `;
  }

  render() {
    const { progress } = this.props;

    return (
      <React.Fragment>
        <header>
          <div className="flex-wrap d-flex   mb-3">
            <div className="col-sm-12 mt-5   text-center">
              {" "}
              <div className="wraper mt-5">
                <h2>100 Days of Code</h2>
              </div>
            </div>
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
