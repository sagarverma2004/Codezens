import Hero from "../Components/Homes/Hero"
import Ourservices from "../Components/Homes/Ourservices"
import Ourwork from "../Components/Homes/Ourwork"
import Slider from "../Components/Homes/Slider"
import Technologies from "../Components/Homes/Technologies"
import Timetoupgrade from "../Components/Homes/Timetoupgrade"
import Whycodezens from "../Components/Homes/Whycodezens"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function Home() {

  const location = useLocation()

  useEffect(() => {
    if (location.state?.from === "home-services") {

      const section = document.getElementById("home")

      if (section) {
        const yOffset = -150
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset

        window.scrollTo({
          top: y,
          behavior: "smooth"
        })
      }
    }
  }, [location])

  return (
    <>
      <Hero />
      <Slider />

      <div id="home">
        <Ourservices />
      </div>

      <Technologies />
      <Ourwork />
      <Whycodezens />
      <Timetoupgrade />

    </>
  )
}

export default Home ; 
