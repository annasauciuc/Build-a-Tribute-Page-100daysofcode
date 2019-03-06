import React, { Component } from "react";

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="py-3 text-center text-white mt-auto">
        <div className="d-sm-flex">
          <div className="col-md-5 col" />
          <div className="col-md-7 col">
            <p>&copy; 2019 Sauciuc Ana Maria</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;