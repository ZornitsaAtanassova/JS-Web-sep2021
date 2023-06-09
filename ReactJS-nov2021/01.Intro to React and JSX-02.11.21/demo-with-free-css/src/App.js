import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceHighlights from "./components/ServiceHighlights";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Search from "./components/Search";
import PricingPlans from "./components/PricingPlans";
import OurMission from "./components/OurMission";
import LatestNews from "./components/LatestNews";

function App() {
  return (
    <div>
      <div className="back-to-top"></div>

      <Header />
    
      <ServiceHighlights />
    
      <AboutUs />

      <OurServices />

      <Search />

      <PricingPlans />

      <OurMission />

      <LatestNews />

      <Footer />
    </div>
  );
}

export default App;