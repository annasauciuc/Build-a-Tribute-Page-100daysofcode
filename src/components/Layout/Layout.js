import React, { Component } from "react";
import "./Layout.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cards from "./../CodeDays/Cards/Cards";
import SearchBox from "../Navigation/SearchBox/SearchBox";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
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
    getDayCards().then(days => {
      this.setState({ days: days, progress: days.length });
    });
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
        <section className="wrapper">
          <Header progress={progress} />
          <main className="mainContainer">
            <SearchBox
              value={searchfield}
              searchChange={event => {
                this.onSearchChange(event);
              }}
            />
            <ErrorBoundry>
              <Cards days={filteredDays} />
            </ErrorBoundry>
          </main>
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
