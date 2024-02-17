// import './App.css'

import ExploreService from "./components/ExploreService"
import Footer from "./components/Footer"
import HeroSection1 from "./components/HeroSection1"
import HeroSection2 from "./components/HeroSection2"
import HeroSection3 from "./components/HeroSection3"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import ServicesSection from "./components/ServicesSection"
import VenueSection from "./components/VenueSection"

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection1/>
      <HeroSection2/>
      <HeroSection3/>
      <VenueSection/>
      <ServicesSection/>
      <ExploreService/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
