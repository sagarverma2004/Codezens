import Slide from "../Homes/img/Slide.png"
import Logo from "../Homes/img/Logo.png"
import Allexam from "../Homes/img/Allexam.png"
import Learn from "../Homes/img/Learn.png"
import { motion } from "framer-motion"

function Abslider() {

    const logos = [Allexam, Learn, Logo, Slide]

    return (
        <section className="overflow-hidden py-10 bg-[#F5F5F5]">

            {/* Slider */}
            <motion.div
                initial={{ opacity: 0, y: -50, scale: 0 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="overflow-hidden ">

                <div className="flex gap-16 w-max animate-marquee">
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="company-logo"
                            className="h-12 md:h-14 object-contain"
                        />
                    ))}
                </div>

            </motion.div>



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

export default Abslider

