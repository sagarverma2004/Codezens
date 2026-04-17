import Aboutline from "../About/img/Aboutline.png"
import abouthero from "../About/img/abouthero.png";
import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={abouthero}
        alt="About Hero"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <motion.img
        src={Aboutline}
        alt="Overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      {/* Dark Layer */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-6 text-2xl font-bold leading-tight text-white sm:text-4xl md:text-6xl"
        >
          We Don’t <span className=" text-[#FFCD00] ">Just Build Products.</span> We Build Partnerships That Last.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl text-sm text-white sm:text-base md:text-lg"
        >
          CodeZens is a team of creators, engineers, and strategists who turn bold ideas into seamless digital experiences. We mix creativity with technology to help brands grow, scale, and stand out.
        </motion.p>

      </div>
    </section>
  );
}

export default AboutHero;
