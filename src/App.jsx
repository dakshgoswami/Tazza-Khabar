import React, { Component } from "react";
import News from "./components/News";
import NewsNav from "./components/NewsNav";
export default class App extends Component {
  render() {
    return (
      <>
          <NewsNav />
          <News countryName="us" category="general" />
      </>
    );
  }
}
