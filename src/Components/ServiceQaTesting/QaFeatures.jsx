import React from "react";
import { FiShield, FiZap, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function QaFeatures() {
  const tech = ["Selenium", "Cypress", "Playwright"];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="px-6 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase sm:text-sm">
            QA & Automation
          </span>
          <h2 className="mt-3 mb-3 text-2xl font-semibold sm:text-4xl md:text-5xl text-slate-900 md:mt-4 md:mb-4">
            Reliable Testing. Faster Releases.
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-500">
            We combine automation, precision, and security to deliver high-quality software with speed and confidence.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-5 md:grid-cols-3 md:gap-6"
        >

          {/* Main Feature */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.01 }}
            className="relative flex flex-col justify-between p-6 overflow-hidden text-white md:col-span-2 bg-slate-900 rounded-2xl md:rounded-3xl sm:p-8 md:p-10 group"
          >
            <div className="absolute w-32 h-32 transition rounded-full -top-10 -right-10 md:w-40 md:h-40 bg-blue-500/20 blur-3xl group-hover:scale-110" />

            <div>
              <FiZap className="mb-5 text-3xl text-blue-400 md:text-4xl md:mb-6" />
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                Accelerated QA Automation
              </h3>
              <p className="max-w-md mt-3 text-sm md:mt-4 text-slate-300 sm:text-base">
                Replace manual bottlenecks with scalable automated test suites that run continuously and deliver faster results.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 md:mt-8 sm:gap-3">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[10px] sm:text-xs border border-white/10 rounded-full text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between p-6 transition bg-white border border-slate-200 rounded-2xl md:rounded-3xl md:p-8 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <FiCheckCircle className="text-2xl text-blue-600 md:text-3xl" />
              <span className="text-[10px] md:text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                High Coverage
              </span>
            </div>

            <div className="mt-4 md:mt-6">
              <h4 className="text-lg font-semibold md:text-xl text-slate-900">
                Precision Testing
              </h4>
              <p className="mt-2 text-sm text-slate-500">
                Comprehensive regression testing ensures stability and zero critical defects.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="flex items-center gap-4 p-6 transition bg-white border border-slate-200 rounded-2xl md:rounded-3xl md:p-8 md:gap-5 hover:shadow-lg"
          >
            <div className="flex items-center justify-center w-12 h-12 text-blue-400 md:w-14 md:h-14 rounded-xl bg-slate-900">
              <FiShield size={20} />
            </div>

            <div>
              <h4 className="text-base font-semibold md:text-lg text-slate-900">
                Security Validation
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                Advanced security testing including API validation and penetration checks.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default QaFeatures;
