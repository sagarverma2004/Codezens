import React from "react";
import { motion } from "framer-motion";
import LineBackground from "../Homes/img/LineBackground.png";

function DigitalHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={LineBackground}
        alt="Background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="object-cover w-full h-64 sm:h-80 md:h-125"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center max-w-4xl px-4 mx-auto text-center">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pb-4 text-2xl font-semibold leading-tight text-black sm:text-3xl md:text-5xl lg:text-6xl md:pb-5"
        >
          Drive Growth with Smart Digital Marketing & SEO
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl text-sm font-light text-gray-600 sm:text-base md:text-xl lg:text-2xl"
        >
          Boost visibility, attract the right audience, and convert clicks into customers with data-driven strategies that deliver measurable results.
        </motion.p>

      </div>
    </section>
  );
}

export default DigitalHero;
