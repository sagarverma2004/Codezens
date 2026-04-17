import { FiDatabase, FiUsers, FiBox, FiShield, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

function ErpModules() {
  const modules = [
    {
      name: "Advanced CRM",
      icon: <FiUsers />,
      desc: "Lead scoring, automated pipelines, and 360° customer views.",
      color: "bg-blue-600",
    },
    {
      name: "Inventory Ops",
      icon: <FiBox />,
      desc: "Real-time stock tracking, multi-warehouse sync, and automated reordering.",
      color: "bg-indigo-600",
    },
    {
      name: "Financial Core",
      icon: <FiDatabase />,
      desc: "Automated billing, tax compliance, and multi-currency ledger management.",
      color: "bg-slate-900",
    },
  ];

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
    <section className="py-16 sm:py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >

          {/* LEFT TEXT */}
          <motion.div variants={item} className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Bespoke <br />
              <span className="text-blue-600">Enterprise</span> <br /> Engines.
            </h2>

            <p className="mt-6 sm:mt-8 text-slate-500 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Off-the-shelf software won't fit your unique workflow. We build custom ERPs that act as the nervous system of your business.
            </p>

            <motion.button
              whileHover={{ x: 5 }}
              className="mt-8 sm:mt-10 flex items-center gap-3 font-semibold uppercase tracking-widest text-xs sm:text-sm text-blue-600 group mx-auto lg:mx-0"
            >
              View All Modules
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className={`p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-[40px] ${i === 2 ? "md:col-span-2" : ""
                  } bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden relative`}
              >
                <div
                  className={`${m.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl text-white mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  {m.icon}
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {m.name}
                </h3>

                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-sm">
                  {m.desc}
                </p>

                <FiShield className="absolute -bottom-10 -right-10 text-[120px] sm:text-[160px] opacity-[0.03] group-hover:rotate-12 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ErpModules;
