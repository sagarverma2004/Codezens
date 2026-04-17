import { Route, Routes } from "react-router-dom"

import Navbar from "./Components/Header/Navbar"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Work from "./Pages/Work"
import Inslight from "./Pages/Inslight"
import Careers from "./Pages/Careers"
import Contact from "./Pages/Contact"

import Footer from "./Components/Footer/Footer"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import Homewebdevelopment from "./Pages/Homewebdevelopment"
import Homeappdevelopment from "./Pages/Homeappdevelopment"
import Homecustomdevelopment from "./Pages/Homecustomdevelopment"
import Homeuiuxdesign from "./Pages/Homeuiuxdesign"
import Homebackenddevelopment from "./Pages/Homebackenddevelopment"
import Homecloud from "./Pages/Homecloud"

import ServiceAiSolution from "./Pages/ServiceAiSolution"
import Servicedigitalmarketing from "./Pages/Servicedigitalmarketing"
import ServiceCRMandERPDevelopment from "./Pages/ServiceCRMandERPDevelopment"
import ServiceMaintenanceandSupport from "./Pages/ServiceMaintenanceandSupport"
import ServiceQATestingandAutomation from "./Pages/ServiceQATestingandAutomation"

import Inslightcards1 from "./Pages/Inslightcards1"
import Inslightcards2 from "./Pages/Inslightcards2"
import Inslightcards3 from "./Pages/Inslightcards3"
import Inslightcards4 from "./Pages/Inslightcards4"
import Inslightcards5 from "./Pages/Inslightcards5"
import Inslightcards6 from "./Pages/Inslightcards6"
import Inslightcards7 from "./Pages/Inslightcards7"
import Inslightcards8 from "./Pages/Inslightcards8"
import Inslightcards9 from "./Pages/Inslightcards9"

import ProjectDetails from "./Components/FineEdge/ProjectDetails"
import WellnestDetails from "./Components/Wellness/WellnestDetails"
import NovaCartDetails from "./Components/Navacart/NovaCartDetails"





function App() {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])
  return (
    <div className="font-extrabold">


      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/insight" element={<Inslight />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        {/* Home-Cards Routing 1-6 same service */}
        <Route path="/webdevelop" element={<Homewebdevelopment />} />
        <Route path="/appdevelop" element={<Homeappdevelopment />} />
        <Route path="/customsoftdevelop" element={<Homecustomdevelopment />} />
        <Route path="/backenddevelop" element={<Homebackenddevelopment />} />
        <Route path="/uiuxdesign" element={<Homeuiuxdesign />} />
        <Route path="/clouddeploy" element={<Homecloud />} />

        {/* Service-cards 7-11 */}
        <Route path="/aisolution" element={<ServiceAiSolution />} />
        <Route path="/digitalmarketing" element={<Servicedigitalmarketing />} />
        <Route path="/crmanderp" element={<ServiceCRMandERPDevelopment />} />
        <Route path="/qatesting" element={<ServiceQATestingandAutomation />} />
        <Route path="/maintenance" element={<ServiceMaintenanceandSupport />} />

        {/* Inslight-cards-under */}
        <Route path="/card1" element={<Inslightcards1 />} />
        <Route path="/card2" element={<Inslightcards2 />} />
        <Route path="/card3" element={<Inslightcards3 />} />
        <Route path="/card4" element={<Inslightcards4 />} />
        <Route path="/card5" element={<Inslightcards5 />} />
        <Route path="/card6" element={<Inslightcards6 />} />
        <Route path="/card7" element={<Inslightcards7 />} />
        <Route path="/card8" element={<Inslightcards8 />} />
        <Route path="/card9" element={<Inslightcards9 />} />

        {/* Home-caards */}
        <Route path="/project/finedge" element={<ProjectDetails />} />
        <Route path="/project/wellnest" element={<WellnestDetails />} />
        <Route path="/project/novacart" element={<NovaCartDetails />} />




      </Routes>


      <Footer />

    </div>
  )
}

export default App




