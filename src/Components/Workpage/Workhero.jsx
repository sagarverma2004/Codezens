import workimg from "../Workpage/img/workimg.png";
import LineBackground from "../Homes/img/LineBackground.png";
import { motion } from "framer-motion";

function Workhero() {
    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">

            {/* Background Image */}
            <motion.img
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                src={workimg}
                alt="Work Showcase"
                className="absolute top-0 left-0 object-cover w-full h-full"
            />

            {/* Overlay Image */}
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5 }}
                src={LineBackground}
                alt="Overlay"
                className="absolute top-0 left-0 object-cover w-full h-full "
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 "></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                    Work That <span className="text-[#FFCD00]">Speaks</span> for Itself
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 120 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-xl text-sm text-white sm:text-base md:text-lg">
                    A collection of digital products we’ve designed, built, and delivered — each crafted with clarity, purpose, and measurable results.
                </motion.p>

            </div>
        </section>
    );
}

export default Workhero;
