import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function SystemHealthWatch() {
  const features = [
    "Real-time Error Logging",
    "Auto-Scaling Infrastructure",
    "Database Optimization",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#02040A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)]" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[80px] p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h3 className="mb-6 text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Predictive <br />
              <span className="italic text-blue-500">Self-Healing</span> Systems.
            </h3>

            <div className="space-y-4 md:space-y-6">
              {features.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-4 text-gray-400 group"
                >
                  <div className="w-8 md:w-10 h-0.5 bg-blue-500 group-hover:w-16 md:group-hover:w-20 transition-all" />
                  <span className="text-sm font-light tracking-wide sm:text-base md:text-lg">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 sm:p-8 bg-white/5 rounded-2xl md:rounded-[40px] border border-white/10 text-center"
              >
                <span className="block text-3xl font-black text-white sm:text-4xl md:text-5xl">
                  99.9%
                </span>
                <span className="text-blue-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">
                  Uptime
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 sm:p-8 bg-blue-600 rounded-2xl md:rounded-[40px] text-center shadow-[0_0_40px_rgba(37,99,235,0.3)]"
              >
                <span className="block text-3xl font-black text-white sm:text-4xl md:text-5xl">
                  &lt;2ms
                </span>
                <span className="text-blue-100 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">
                  Latency
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="col-span-2 p-6 sm:p-8 md:p-10 bg-white/5 rounded-2xl md:rounded-[40px] border border-white/10 flex items-center justify-between overflow-hidden relative"
              >
                <div className="relative z-10">
                  <h5 className="text-sm font-bold text-white sm:text-base">
                    Global CDN Status
                  </h5>
                  <p className="text-xs text-gray-500">
                    All nodes operational
                  </p>
                </div>

                <div className="flex gap-1">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 10 }}
                      animate={{ height: Math.random() * 40 + 10 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.1,
                      }}
                      className="w-1.5 bg-emerald-500 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SystemHealthWatch;
