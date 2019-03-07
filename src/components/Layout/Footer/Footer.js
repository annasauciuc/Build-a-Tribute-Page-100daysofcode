import React, { Component } from "react";

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="py-3 mt-5 text-center">
      <div className="d-sm-flex">
          <div className="col-md-5 col">
              <blockquote className="trans" id="FOOTER_TEXT"> <em> Made with  <i className=" fa-2x devicon-react-plain colored"></i></em></blockquote>
          </div>
          <div className="col-md-7 col">
              <a href="#TITLE"> <button id="floating-action-button" className="btn position-fixed shadow">
                      <i className="m-auto fas text-white fa-arrow-up btn-md btnFloat rounded-circle"></i>
                  </button> </a>
              <p>&copy; 2019 Sauciuc Ana Maria</p>
          </div>
      </div>
  </footer>
    );
  }
}

export default Footer;