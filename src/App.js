import React, { Component } from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import ScrollArea from "react-scrollbar";
import Layout from "./components/Layout/Layout";

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200
    });
  }
  render() {
    return (
      <ScrollArea>
        {" "}
        <Layout />
      </ScrollArea>
    );
  }
}

export default App;
