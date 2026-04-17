import React from 'react';
import { motion } from 'framer-motion';

function ErpPerformance() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  const bars = [40, 70, 45, 90];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0F172A] overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20"
        >

          {/* LEFT GRAPH */}
          <motion.div variants={item} className="relative w-full max-w-md lg:w-1/2 sm:max-w-lg">
            {/* Blur */}
            <div className="absolute w-56 h-56 rounded-full -top-16 -left-16 sm:w-80 sm:h-80 bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-[40px] p-2 shadow-xl">
              <div className="bg-[#020617] p-6 sm:p-10 rounded-2xl sm:rounded-[36px] border border-white/5">

                {/* Header */}
                <div className="flex items-end justify-between mb-8 sm:mb-12">
                  <div className="space-y-2">
                    <div className="w-10 h-1 bg-blue-500 rounded-full sm:w-12" />
                    <div className="w-20 h-1 rounded-full sm:w-24 bg-white/10" />
                  </div>

                  <div className="text-right">
                    <span className="text-2xl italic font-black text-white sm:text-3xl md:text-4xl">
                      75%
                    </span>
                    <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                      Efficiency Gain
                    </p>
                  </div>
                </div>

                {/* Bars */}
                <div className="grid h-24 grid-cols-4 gap-3 sm:gap-4 sm:h-32">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-end overflow-hidden bg-blue-600/20 rounded-xl sm:rounded-2xl"
                    >
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="w-full origin-bottom bg-blue-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div variants={item} className="text-center text-white lg:w-1/2 lg:text-left">
            <h2 className="mb-6 text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl sm:mb-8">
              Synchronized <br />
              <span className="italic text-blue-400">Complexity.</span>
            </h2>

            <div className="space-y-6 sm:space-y-8">

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-6 transition-all duration-300 border sm:p-8 bg-white/5 border-white/10 rounded-2xl sm:rounded-4xl hover:border-blue-400 group"
              >
                <h4 className="mb-2 text-lg font-bold transition-colors sm:text-xl group-hover:text-blue-400">
                  Unified Data Source
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  Eliminate departmental silos with a single, real-time source of truth for all your business data.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-6 transition-all duration-300 border sm:p-8 bg-white/5 border-white/10 rounded-2xl sm:rounded-4xl hover:border-blue-400 group"
              >
                <h4 className="mb-2 text-lg font-bold transition-colors sm:text-xl group-hover:text-blue-400">
                  Role-Based Security
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  Military-grade encryption with granular access controls to protect your most sensitive business logic.
                </p>
              </motion.div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default ErpPerformance;
