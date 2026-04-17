import careerhero from "./img/careerhero.png"
import LineBackground from "../Homes/img/LineBackground.png"
import { motion } from "framer-motion";

function Careershero() {
    return (
        <section className="relative w-full h-[50vh] md:h-[80vh] lg:h-screen overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src={careerhero}
                alt="Career Hero"
                className="absolute inset-0 object-cover w-full h-full"
            />

            {/* Overlay Image (Line Background) */}
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.5 }}
                src={LineBackground}
                alt=""
                className="absolute inset-0 object-cover w-full h-full pointer-events-none"
            />

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-5xl px-6 mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-7xl"
                >
                    Build Your Career With <span className="text-[#FFCD00]">CodeZens</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-2xl mx-auto mt-4 text-sm font-light text-white/90 md:text-lg lg:text-xl"
                >
                    Join a team of thinkers, creators, and problem-solvers building digital products that make an impact.
                </motion.p>
            </div>

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 z-0 bg-black/30"></div>
        </section>
    );
}

export default Careershero;
