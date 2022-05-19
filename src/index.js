import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./Pages/Features/Features";
import FAQ from "./Pages/FAQ/FAQ";
import ContactUs from "./Pages/Contact Us/ContactUs";
import Download from "./Pages/Download/Download";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import Terms from "./Pages/Terms/Terms";
import PrivacyPolicy from "./Pages/Terms/PrivacyPolicy";

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/features" element={<Features />} exact/>
        <Route path="/faq" element={<FAQ />} exact/>
        <Route path="/contact-us" element={<ContactUs />} exact/>
        <Route path="/download" element={<Download />} exact/>
        <Route path="/terms-of-service" element={<Terms />} exact/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} exact/>
      </Routes>
    </BrowserRouter>
  </Provider>
);
