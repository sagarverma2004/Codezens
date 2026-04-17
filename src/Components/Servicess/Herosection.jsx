import servicehero from "../Servicess/img/servicehero.png";
import LineBackground from "../Homes/img/LineBackground.png";
import { motion } from "framer-motion";

function Herosection() {
  return (
    <section className="relative w-full overflow-hidden bg-blue-100 mb-0 md:mb-160 h-130 md:h-[80vh]">

      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        src={servicehero}
        alt="Service Hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        src={LineBackground}
        alt="Overlay"
        className="absolute top-0 left-0 w-full h-full object-cover "
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-sm sm:text-base md:text-lg max-w-xl">
          Everything you need to design, build, launch, and scale powerful digital products — all under one roof.
        </motion.p>

      </div>
    </section>
  );
}

export default Herosection;
