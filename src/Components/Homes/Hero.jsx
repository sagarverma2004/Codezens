import LineBackground from "../Homes/img/LineBackground.png"
import Herosectionimg1 from "../Homes/img/Herosectionimg1.png"
import Herosectionimg2 from "../Homes/img/Herosectionimg2.png"
import Herosectionimg3 from "../Homes/img/Herosectionimg3.png"
import { IoIosArrowRoundForward } from "react-icons/io"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

function Hero() {

    const images = [
        Herosectionimg1,
        Herosectionimg2,
        Herosectionimg3,

    ];

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 1500) // thoda slow smooth feel

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <section className="relative w-full overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src={LineBackground}
                        alt=""
                        className="object-cover w-full overflow-hidden h-120"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center justify-between px-4 mx-auto mb-10 text-center md:flex-row max-w-7xl md:text-left mt-30">

                    {/* Left */}
                    <div className="md:w-1/2">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-xl md:text-2xl lg:text-5xl lg:leading-13"
                        >
                            <p>
                                Build Digital Products That Make Noise —
                                <span className="text-[#CCCCCC]">
                                    {" "}Not Noise That Sounds Digital.
                                </span>
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-[#555555] pt-4 text-sm md:text-md lg:text-xl font-semibold"
                        >
                            We design, build, and scale digital products that feel premium, perform fast, and grow your business.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                            whileHover={{ scale: 1.05, rotate: 3 }}
                            whileTap={{ scale: 0.95, }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="mt-10 flex items-center gap-2 px-4 py-2 bg-[#FFCD00] text-sm md:text-xl w-fit mx-auto md:mx-0"
                        >
                            Book a Strategy Call
                            <IoIosArrowRoundForward />
                        </motion.button>
                    </div>

                    {/* Right */}
                    <div className="flex justify-center mt-10 overflow-hidden md:mt-0 md:w-1/2 ">

                        <motion.img
                            key={index}
                            src={images[index]}
                            alt="Hero-img"
                            className="w-full max-w-xl rounded-sm"
                            initial={{ y: 0.5, opacity: 1 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5, }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
