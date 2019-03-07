import React, { Component } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cards from "./../CodeDays/Cards/Cards";
import SearchBox from "../Navigation/SearchBox/SearchBox";
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import { getDayCards } from "../../services/getDay";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      days: [],
      searchfield: "",
      progress: 0
    };
  }

  componentDidMount() {
    this.setState({ days: getDayCards(), progress: getDayCards().length });
    console.log("getDayCards().length :", getDayCards().length);
    console.log("this.state.progress :", this.state.progress);
  }

  onSearchChange(event) {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { days, searchfield, progress } = this.state;

    const filteredDays = days.filter(day => {
      return day.title
        .toLowerCase()
        .replace(/ +/g, "")
        .includes(searchfield.toLowerCase().replace(/ +/g, ""));
    });
    return (
      <React.Fragment>
        <div className="container">
        
          <Header progress={progress} />
          <SearchBox
            searchChange={event => {
              this.onSearchChange(event);
            }}
          />
          <ErrorBoundry>
            <Cards days={filteredDays} />
          </ErrorBoundry>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
