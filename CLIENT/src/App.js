import React from "react";
import ReactGA from "react-ga";
import InitializeReactGA from "./components/helper/googleAnalytics";
import CookieConsent from "react-cookie-consent";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

//---------------PAGES-----------------------

//Main Nav Pages
import Home                       from "./Pages/MainNavPages/Home";
import AboutUs                    from "./Pages/MainNavPages/AboutUs";
import Contact                    from "./Pages/MainNavPages/Contact";
import Infos                      from "./Pages/MainNavPages/Infos";
import Request                    from "./Pages/MainNavPages/Request";
import Blog                       from "./Pages/MainNavPages/Blog";

//Footer Pages
import Impressum                  from "./Pages/FooterPages/Impressum";
import Privacy                    from "./Pages/FooterPages/Privacy";

//UnderPagesBlog
import Psyche                     from "./Pages/UnderPagesBlog/Psyche";
import BuOhneGesundheitsfragen    from "./Pages/UnderPagesBlog/BuOhneGesundheitsfragen";
import ProBevoga                  from "./Pages/UnderPagesBlog/ProBevoga";
import GuenstigeBU                from "./Pages/UnderPagesBlog/GuenstigeBU";
import KeineNormalannahme         from "./Pages/UnderPagesBlog/keineNormalannahme";
import ChronischeKrankheiten      from "./Pages/UnderPagesBlog/chronischeKrankheiten";
import BuSinnvoll                 from "./Pages/UnderPagesBlog/BuSinnvoll";
import BuRente                    from "./Pages/UnderPagesBlog/BuRente";
import Grundfaehigkeistvers       from "./Pages/UnderPagesBlog/grundfaehigkeistvers";

//UnderPagesInfos
import WhatsaBu                   from "./Pages/UnderPagesInfos/WhatsaBu";
import Compare                    from "./Pages/UnderPagesInfos/Compare";
import Partner                    from "./Pages/UnderPagesInfos/Partner";
import Bonus                      from "./Pages/UnderPagesInfos/Bonus";
import Concept                    from "./Pages/UnderPagesInfos/Concept";

//UnshownPages
import Error                      from "./Pages/UnshownPages/Error";
import Test                       from "./Pages/UnshownPages/Test";

//homepeage- modules
import Navbar                     from "./components/Navbar";
import ContactNow                 from "./components/ContactNow";
import Footer                     from "./components/Footer";

// CSS
import "./css/MainPages.css";
import "./css/Media.css";


const TRACKING_ID = "G-F5DBPS3J24"
ReactGA.initialize(TRACKING_ID );

function usePageViews() {
	let location = useLocation();
	useEffect(() => {
		InitializeReactGA(ReactGA);
		ReactGA.set({ page: location.pathname });
		ReactGA.pageview(location.pathname);
	}, [location]);
}

function App() {
  usePageViews();

  return (
    <>
     
        
        <Navbar />
        <React.Suspense fallback={<h6>Loading...</h6>}>
        <Routes>
          <Route path="/"                            element={<Home                          />} />
          <Route path="/aboutus"                     element={<AboutUs                       />} />
          <Route path="/contact"                     element={<Contact                       />} />
          <Route path="/infos"                       element={<Infos                         />} />
          <Route path="/request"                     element={<Request                       />} />
          <Route path="/impressum"                   element={<Impressum                     />} />
          <Route path="/whatsabu"                    element={<WhatsaBu                      />} />
          <Route path="/test"                        element={<Test                          />} />
          <Route path="/compare"                     element={<Compare                       />} />
          <Route path="/partner"                     element={<Partner                       />} />
          <Route path="/concept"                     element={<Concept                       />} />
          <Route path="/blog"                        element={<Blog                          />} />
          <Route path="/privacy"                     element={<Privacy                       />} />
          <Route path="/bonus"                       element={<Bonus                         />} />
          <Route path="/Psyche"                      element={<Psyche                        />} />
          <Route path="/BuOhneGesundheitsfragen"     element={<BuOhneGesundheitsfragen       />} />
          <Route path="/ProBevoga"                   element={<ProBevoga                     />} />
          <Route path="*"                            element={<Error                         />} />
          <Route path="/GuenstigeBU"                 element={<GuenstigeBU                   />} />
          <Route path="/KeineNormalannahme"          element={<KeineNormalannahme            />} />
          <Route path="/chronischeKrankheiten"       element={<ChronischeKrankheiten         />} />
          <Route path="/BuSinnvoll"                  element={<BuSinnvoll                    />} />
          <Route path="/BuRente"                     element={<BuRente                       />} />
          <Route path="/Grundfaehigkeistvers"        element={<Grundfaehigkeistvers          />} />
        </Routes>
        </React.Suspense>
        <ContactNow />
        <Footer />
      {/* </Router> */}
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
