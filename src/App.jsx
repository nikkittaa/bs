import AboutUs from "./components/About"
import ContactUs from "./components/Contact"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
      <Navbar/>
      <div className = "max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <AboutUs/>
        <Services/>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
      </div>
    </>
  )
}

export default App
