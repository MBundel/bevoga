import React from "react";
import ReactGA from "react-ga";
import CookieConsent from "react-cookie-consent";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

//pages
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUs";
import Contact from "./components/Pages/Contact";
import Infos from "./components/Pages/Infos";
import Request from "./components/Pages/Request";
import Footer from "./components/Footer";
import Impressum from "./components/Pages/Impressum";
import WhatsaBu from "./components/Pages/WhatsaBu";
import Test from "./components/Pages/Test";
import Compare from "./components/Pages/Compare";
import Partner from "./components/Pages/Partner";
import Bonus from "./components/Pages/Bonus";
import Concept from "./components/Pages/Concept";
import Blog from "./components/Pages/Blog";
import Privacy from "./components/Pages/Privacy";

//hompeage- modules
import Navbar from "./components/Navbar";
import ContactNow from "./components/ContactNow";

// CSS
import "./components/css/MainPages.css";
import "./components/css/Media.css";

ReactGA.initialize("G-2TNHKJ93CC");
ReactGA.pageview(window.location.pathname + window.location.search);

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize("G-H0WF20SLK5");
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname + window.location.search);
  }, [location]);
}

function App() {
  // usePageViews();

  // console.log("1");
  // const getFirebaseData = () => {
  //   axios
  //     .get("http://localhost:5000/firebase")
  //     .then(console.log("hallo"))
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .then(console.log("hallo"))
  //     .catch((err) => console.error(err));
  // };
  // getFirebaseData()
  // console.log("2");

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"           element={<Home      />} />
          <Route path="/aboutUs"    element={<AboutUs   />} />
          <Route path="/contact"    element={<Contact   />} />
          <Route path="/infos"      element={<Infos     />} />
          <Route path="/request"    element={<Request   />} />
          <Route path="/impressum"  element={<Impressum />} />
          <Route path="/whatsabu"   element={<WhatsaBu  />} />
          <Route path="/test"       element={<Test      />} />
          <Route path="/compare"    element={<Compare   />} />
          <Route path="/partner"    element={<Partner   />} />
          <Route path="/concept"    element={<Concept   />} />
          <Route path="/blog"       element={<Blog      />} />
          <Route path="/privacy"    element={<Privacy   />} />
          <Route path="/bonus"      element={<Bonus     />} />
        </Routes>
        <ContactNow />
        <Footer />
      </Router>
      <CookieConsent
        location="bottom"
        buttonText="Alles klar!"
        cookieName="myAwesomeCookieName2"
        style={{ backgroundColor: "#78B2DB" }}
        buttonStyle={{
          color: "black",
          fontSize: "13px",
          backgroundColor: "#f4a89f",
        }}
        expires={150}
      >
        Wir nutzen Cookies.{" "}
        <span style={{ fontSize: "10px" }}>So wie jede Seite :)</span>
      </CookieConsent>
    </>
  );
}

export default App;
