import React, { Fragment } from "react";
import InfoSection from "../../Components/InfoSection/InfoSection";
import { homeObjThree, homeObjTwo, homeObjFour } from "./Data";
import { Navbar } from "../../Components";
import GlobalStyle from "../../globalStyles";
import ScrollToTop from "../../Components/ScrollToTop";
import { Footer } from "../../Components";

const Features = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <br />
      <br />
      <h1 style={{ textAlign: "center" , fontSize : "3rem"}}>Features</h1>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Footer />
    </Fragment>
  );
};

export default Features;
