import React, { Fragment } from "react";
import { Navbar } from "../../Components";
import GlobalStyle from "../../globalStyles";
import ScrollToTop from "../../Components/ScrollToTop";
import { Footer } from "../../Components";
import { Container } from "../../globalStyles";

const Download = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <br />
      <br />
      <Container>
        <h1 style={{ textAlign: "center" }}>Coming Soon...</h1>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Download;
