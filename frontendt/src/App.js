import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import SubscriptionPlans from "./components/SubscriptionPlans";
import Footer from "./components/Footer";
import { Auth0Provider } from "@auth0/auth0-react";
import Contactform from "./components/Contactform";
import PrivacyPolicy from "./components/PrivacyPolicy";
import About from "./components/About";
import ResponsiveTimePickers from "./components/Timesel";
// import CustomTable from "./components/CustomTable";

function App() {
  switch (window.location.pathname) {
    case "/":
      return (
        <div className="">
          <Auth0Provider
            domain="dev-cgnlraldueb0l6yc.us.auth0.com"
            clientId="8EySSMwIF1KN7Q8E19WmLCA7icdRKA27"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <Navbar />
            <Hero />
            <Analytics />
            <Newsletter />
            {/* <SubscriptionPlans /> */}
            <hr></hr>
            {/* <ContactUs /> */}
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <Footer />
          </Auth0Provider>
        </div>
      );
    case "/time":
      return <ResponsiveTimePickers />;
    case "/contactform":
      return <Contactform />;
    case "/about":
      return <About />;
    case "/subscriptionplans":
      return (
        <Auth0Provider
          domain="dev-cgnlraldueb0l6yc.us.auth0.com"
          clientId="8EySSMwIF1KN7Q8E19WmLCA7icdRKA27"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <SubscriptionPlans />
          <Footer />
        </Auth0Provider>
      );
    case "/privacypolicy":
      return (
        <div className="bg-white">
          <PrivacyPolicy />
        </div>
      );
    default:
      break;
  }
}

export default App;
