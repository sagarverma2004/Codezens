import { FiCpu, FiActivity } from "react-icons/fi";
import { motion } from "framer-motion";

function AiBentoGrid() {
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
    <section className="py-16 sm:py-20 md:py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 rounded-full w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600/10 blur-3xl" />

      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16"
        >

          {/* LEFT CONTENT */}
          <motion.div
            variants={item}
            className="text-center lg:w-1/2 lg:text-left"
          >
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              AI that <br />
              <span className="text-indigo-500">Thinks</span> ahead.
            </h2>

            <p className="max-w-md mx-auto mt-6 text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-lg md:text-xl lg:mx-0">
              We don't just build models; we build intelligent ecosystems that learn from your business DNA.
            </p>

            <div className="mt-8 sm:mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-full shadow-lg sm:px-8 sm:py-4 hover:shadow-indigo-500/30"
              >
                Explore Tech
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="relative w-full max-w-md lg:w-1/2 sm:max-w-lg">

            {/* Main Card */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="relative z-20 p-6 border shadow-xl bg-white/5 backdrop-blur-xl border-white/10 sm:p-10 rounded-2xl sm:rounded-4xl group hover:shadow-[0_20px_80px_rgba(99,102,241,0.25)] transition-all duration-500"
            >
              <FiCpu className="mb-4 text-3xl text-indigo-500 transition-transform duration-300 sm:text-5xl sm:mb-6 group-hover:scale-110" />

              <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                Neural Architecture
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Custom LLM Training",
                  "Edge AI Integration",
                  "Real-time Neural Ops",
                ].map((t) => (
                  <motion.li
                    key={t}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 text-sm text-gray-300 sm:text-base"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" /> {t}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              animate={{ y: [0, -10, 0] }}
              // transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 bg-indigo-600 p-5 sm:p-8 rounded-2xl sm:rounded-[28px] z-30 shadow-xl hidden sm:block"
            >
              <FiActivity className="mb-2 text-2xl text-white sm:text-4xl" />
              <div className="text-2xl font-black text-white sm:text-3xl">99.8%</div>
              <div className="text-xs tracking-widest text-indigo-200 uppercase sm:text-sm">
                Accuracy
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AiBentoGrid;
