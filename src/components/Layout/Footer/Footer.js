import React, { Component } from "react";

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="py-3 mt-5 text-center">
      <div className="d-sm-flex">
          <div className="col-md-5">
              <blockquote className=""> <em> Made with  <i className=" fa-2x devicon-react-plain colored"></i></em></blockquote>
          </div>
          <div className="col-md-7">
              <span>&copy; 2019 Sauciuc Ana Maria</span>
          </div>
      </div>
  </footer>
    );
  }
}

export default Footer;