import React from "react";
import { motion } from "framer-motion";
import LineBackground from "../Homes/img/LineBackground.png";

function CrmHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={LineBackground}
        alt="Background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-64 sm:h-80 md:h-125 object-cover"
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
          Streamline Operations with Smart CRM & ERP Solutions
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl text-sm font-light text-gray-600 sm:text-base md:text-xl lg:text-2xl"
        >
          Integrate, automate, and manage your business processes efficiently with scalable CRM and ERP systems built for growth.
        </motion.p>

      </div>
    </section>
  );
}

export default CrmHero;
