import { FiTrendingUp, FiBarChart, FiSearch, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

function MarketingPerformance() {
  return (
    <section className="py-32 bg-[#080808] overflow-hidden text-white">
      <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center lg:col-span-5"
        >
          <span className="text-[#00FF87] font-mono tracking-[0.3em] uppercase text-sm mb-6">
            #Performance_Marketing
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter italic">
            DOMINATE <br /> THE <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00FF87] to-[#60EFFF]">SEARCH.</span>
          </h2>
          <p className="max-w-sm mt-6 text-base font-light leading-relaxed text-gray-400 sm:mt-8 sm:text-lg md:text-xl">
            We don't just rank keywords; we capture market share. High-octane SEO for businesses that hate losing.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 mt-8 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-16 h-16 transition-all duration-500 border rounded-full border-white/20 group-hover:bg-white group-hover:text-black">
              <FiArrowUpRight className="text-2xl" />
            </div>
            <span className="text-sm font-bold tracking-widest uppercase">Growth Blueprint</span>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 gap-6 lg:col-span-7 md:grid-cols-2">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all flex flex-col justify-between h-72"
          >
            <FiTrendingUp className="text-5xl text-[#00FF87]" />
            <div>
              <h4 className="text-4xl font-black">312%</h4>
              <p className="mt-2 text-xs font-bold tracking-widest text-gray-500 uppercase">Avg. Traffic Boost</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-10 bg-[#00FF87] rounded-[40px] flex flex-col justify-between h-72 text-black group overflow-hidden relative"
          >
            <FiBarChart className="absolute text-5xl transition-transform scale-150 opacity-20 -right-4 -top-4 group-hover:rotate-12" />
            <div className="relative z-10">
              <h4 className="text-3xl font-black leading-none">Conversion Focused.</h4>
              <p className="mt-4 font-medium opacity-80">Turning clicks into paying customers with data-driven CRO.</p>
            </div>
            <div className="w-full h-2 mt-4 overflow-hidden rounded-full bg-black/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                className="h-full origin-left bg-black"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default MarketingPerformance;
