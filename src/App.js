import React, { Fragment } from "react";
import { Navbar, Footer } from "./Components";
import GlobalStyle from "./globalStyles";
import Home from "./Pages/HomePage/Home";
import ScrollToTop from "./Components/ScrollToTop";
function App() {


  return (
    <Fragment>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
}


export default App;
