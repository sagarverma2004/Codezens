
import Getinsight from '../Components/Inslight/Getinsight'
import Heroinslight from '../Components/Inslight/Heroinslight'
import Inscards from '../Components/Inslight/Inscards'
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Inslight() {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.from === "inslight-page") {

      setTimeout(() => {
        const section = document.getElementById("inslightcards")

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
      <Heroinslight />

      <div id='inslightcards'>
        <Inscards />
      </div>

      <Getinsight />
    </>
  )
}

export default Inslight
