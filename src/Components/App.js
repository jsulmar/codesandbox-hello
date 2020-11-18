import React, { Component } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Exercises />
        <Footer />
      </React.Fragment>
    );
  }
}
