import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/stocker" element={<App />} />
        <Route path="/stocker/features" element={<Features />} />
        <Route path="/stocker/faq" element={<FAQ />} />
        <Route path="/stocker/contact-us" element={<ContactUs />} />
        <Route path="/stocker/download" element={<Download />} />
        <Route path="/stocker/terms-of-service" element={<Terms />}/>
        <Route path="/stocker/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
