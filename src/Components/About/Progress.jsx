import React, { useState } from "react";
import pro1 from "./Img/pro1.png";
import pro2 from "./Img/pro2.png";
import pro3 from "./Img/pro3.png";
import pro4 from "./Img/pro4.png";
import { motion, AnimatePresence } from "framer-motion";

const Progress = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepsData = [
    {
      title: "Understanding What Truly Matters",
      step: "Step 1 — Understand",
      image: pro1,
      description:
        "We take the time to learn about your vision, your users, and the problem you’re solving. This clarity helps us build a strong foundation for everything that follows.",
    },
    {
      title: "Designing With Purpose and Precision",
      step: "Step 2 — Design",
      image: pro2,
      description:
        "We craft clean, intuitive experiences that feel effortless to use. Every screen, flow, and interaction is thoughtfully designed to support your business goals.",
    },
    {
      title: "Building With Speed, Quality, and Care",
      step: "Step 3 — Build",
      image: pro3,
      description:
        "We transform designs into reliable, scalable products using modern technology. Clean code, strong architecture, and future-ready performance are always our priorities.",
    },
    {
      title: "Launching Smoothly and Growing Smartly",
      step: "Step 4 — Launch",
      image: pro4,
      description:
        "We deploy with confidence, monitor closely, and optimize continuously. Our team stays with you to improve, scale, and support your product long after launch.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

        {/* Animated Image Wrapper */}
        <div className="overflow-hidden rounded-xl h-80">
          <motion.img
            key={activeStep} // Essential for re-triggering animation
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            src={stepsData[activeStep].image}
            alt="step"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Content */}
        <motion.div
          key={`text-${activeStep}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-black">
            {stepsData[activeStep].title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {stepsData[activeStep].description}
          </p>
        </motion.div>
      </div>

      {/* ===== PROGRESS BAR ===== */}
      <div className="relative w-full">

        {/* Background Line */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200"></div>

        {/* Animated Active Line */}
        <motion.div
          className="absolute top-4 left-0 h-0.5 bg-[#FFCD00] z-10"
          initial={{ width: "0%" }}
          whileInView={{ width: `${(activeStep / (stepsData.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        {/* Steps */}
        <div className="flex justify-between relative z-20">
          {stepsData.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className="flex flex-col items-center cursor-pointer w-full"
            >
              {/* Animated DOT */}
              <motion.div
                animate={{
                  backgroundColor: index <= activeStep ? "#FFCD00" : "#FFFFFF",
                  borderColor: index <= activeStep ? "#FFCD00" : "#D1D5DB",
                  scale: index === activeStep ? 1.2 : 1,
                }}
                className="w-8 h-8 rounded-full border-2 transition-colors duration-300"
              ></motion.div>

              {/* TEXT */}
              <p
                className={`mt-4 text-sm font-medium text-center transition-all duration-300
                ${index === activeStep ? "text-black scale-105" : "text-gray-400"}`}
              >
                {step.step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;
