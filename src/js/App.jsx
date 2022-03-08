import React from "react";
import "../scss/app.scss";

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const isOnline = false;

  return isOnline ? (
    <div className="App">
      <Header />
      <Landing />
      <Portfolio title="Recent Projects" />
      <About />
      <Contact />
      <Footer />
    </div>
  ) : (
    <div className="under_construction">
      <div className="message">Site Under Construction</div>
    </div>
  );
};

export default App;
