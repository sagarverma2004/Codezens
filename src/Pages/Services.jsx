import Herosection from "../Components/Servicess/Herosection"
import Servicedrive from "../Components/Servicess/Servicedrive"
import Servicetrustbyteam from "../Components/Servicess/Servicetrustbyteam"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Services() {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.from === "services-page") {

      setTimeout(() => {
        const section = document.getElementById("services")

        if (section) {
          const yOffset = -350
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset

          window.scrollTo({
            top: y,
          })
        }

        // ⭐ IMPORTANT: state clear kar do (ye hi main fix hai)
        navigate(location.pathname, { replace: true })

      }, 100)
    }
  }, [location, navigate])

  return (
    <>
      <Herosection />

      <div id="services">
        <Servicedrive />
      </div>

      <Servicetrustbyteam />
    </>
  )
}

export default Services
