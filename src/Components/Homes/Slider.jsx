import Slide from "./img/Slide.png"
import Logo from "./img/Logo.png"
import Allexam from "./img/Allexam.png"
import Learn from "./img/Learn.png"
import { motion } from "framer-motion"

function Slider() {

  const logos = [Allexam, Learn, Logo, Slide]

  return (
    <section className="py-10 overflow-hidden md:py-16 ">

      <div className="px-4 mx-auto max-w-7xl md:mt-0 md:mb-150 lg:mb-100 ">

        <motion.h1
          initial={{ opacity: 0, y: 200, }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-6 text-lg font-bold md:text-2xl lg:text-3xl">
          Trusted by 50+ companies
        </motion.h1>

        <div className="mb-10 border-t border-gray-300"></div>

        {/* Slider */}
        <div className="overflow-hidden">

          <div
            className="flex gap-16 w-max animate-marquee"
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="company-logo"
                className="object-contain h-12 md:h-14"
              />
            ))}
          </div>

        </div>

        <div className="mt-10 border-b border-gray-300"></div>

      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

    </section>
  )
}

export default Slider
