import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="py-3 mt-5 text-center d-sm-flex">
        <div className="col-md-5">
          <span>
            {" "}
            Made with <i className=" fa-2x devicon-react-plain colored" />
          </span>
        </div>
        <div className="col-md-7 align-self-center">
          <span>&copy; 2019 Sauciuc Ana Maria</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
