import React, { Component } from "react";

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer class="py-3 mt-5 text-center">
      <div class="d-sm-flex">
          <div class="col-md-5 col">
              <blockquote class="trans" id="FOOTER_TEXT"> <em> Made with  <i class=" fa-2x devicon-react-plain colored"></i></em></blockquote>
          </div>
          <div class="col-md-7 col">
              <a href="#TITLE"> <button id="floating-action-button" class="btn position-fixed shadow">
                      <i class="m-auto fas text-white fa-arrow-up btn-md btnFloat rounded-circle"></i>
                  </button> </a>
              <p>&copy; 2018 Sauciuc Ana Maria</p>
          </div>
      </div>
  </footer>
    );
  }
}

export default Footer;