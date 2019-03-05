import React, { Component } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cards from "./../CodeDays/Cards/Cards";

class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default Layout;
