import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}
