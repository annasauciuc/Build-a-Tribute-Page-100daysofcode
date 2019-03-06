import React, { Component } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cards from "./../CodeDays/Cards/Cards";
import SearchBox from "../Navigation/SearchBox/SearchBox";
import { getDayCards } from "../../services/getDay";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      days: [],
      searchfield: ""
    }
  }
  componentDidMount() {
    console.log("getDayCards", );
    this.setState({ days:  getDayCards() });
    
    console.log("this.state", this.state);
  };

  onSearchChange(event){
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { days, searchfield } = this.state;
    const filtereddays = days.filter(day => {
      return day.title.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="container">
        <SearchBox searchChange={this.onSearchChange} />
        <Header />
        <Cards days={filtereddays} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
