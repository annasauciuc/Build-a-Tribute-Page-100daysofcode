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
    };
  }

  componentDidMount() {
    this.setState({ days: getDayCards() });
  }

  onSearchChange(event) {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { days, searchfield } = this.state;

    const filteredDays = days.filter(day => {
      return day.title
        .toLowerCase()
        .replace(/ +/g, "")
        .includes(searchfield.toLowerCase().replace(/ +/g, ""));
    });
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <SearchBox
            searchChange={event => {
              this.onSearchChange(event);
            }}
          />
          <Cards days={filteredDays} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
