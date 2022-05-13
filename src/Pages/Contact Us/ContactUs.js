import React, { Fragment } from "react";
import { Navbar } from "../../Components";
import GlobalStyle from "../../globalStyles";
import ScrollToTop from "../../Components/ScrollToTop";
import { Footer } from "../../Components";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";

const ContactUs = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <ContactComponent />
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
