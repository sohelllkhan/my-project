import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSections from "./components/FeatureSections";
import BloodStockChart from "./components/BloodStockChart";
import FindNearbyDonors from "./components/FindNearbyDonors";
import FacebookComments from "./components/FacebookComments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App({ goToDonate }) {
  const [selectedType, setSelectedType] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-mono bg-gray-50 min-h-screen flex flex-col">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero goToDonate={goToDonate} />
      <FeatureSections />
      <BloodStockChart />
      <FindNearbyDonors />
      <FacebookComments />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
