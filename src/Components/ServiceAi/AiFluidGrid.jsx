import { FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

function AiFluidGrid() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-white sm:py-20 md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-12 sm:gap-8"
        >

          {/* TEXT BLOCK */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-7 bg-[#F4F7FF] rounded-2xl sm:rounded-[40px] p-6 sm:p-10 md:p-14 flex flex-col justify-center hover:shadow-xl transition-all duration-500"
          >
            <h3 className="text-2xl font-black leading-tight sm:text-4xl md:text-5xl text-slate-900">
              Predictive Intelligence for{' '}
              <span className="text-blue-600 underline">Scale.</span>
            </h3>

            <p className="mt-4 text-sm leading-relaxed sm:mt-6 text-slate-600 sm:text-base md:text-lg">
              Our algorithms analyze millions of data points per second to give you a competitive edge that feels like magic.
            </p>
          </motion.div>

          {/* ICON BLOCK */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.04 }}
            className="md:col-span-5 bg-slate-900 rounded-2xl sm:rounded-[40px] p-6 sm:p-10 text-white flex flex-col justify-between group overflow-hidden relative hover:shadow-[0_20px_80px_rgba(59,130,246,0.25)] transition-all duration-500"
          >
            <motion.div
              whileHover={{ scale: 1.25, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FiZap className="text-4xl text-yellow-400 sm:text-6xl md:text-7xl" />
            </motion.div>

            <div className="relative z-10 mt-6 sm:mt-8">
              <h4 className="text-lg font-bold sm:text-xl md:text-2xl">
                Lightning Fast Deployment
              </h4>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                Go from data to deployment in weeks, not months.
              </p>
            </div>

            {/* Glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute w-40 h-40 transition rounded-full -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 sm:w-64 sm:h-64 bg-blue-600/20 blur-3xl group-hover:bg-blue-600/40"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default AiFluidGrid;
