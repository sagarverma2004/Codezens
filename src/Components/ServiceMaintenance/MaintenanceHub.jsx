import { FiLifeBuoy, FiZap, FiRefreshCw, FiShield } from "react-icons/fi";
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

function MaintenanceHub() {
  const features = [
    {
      title: "Adaptive Scaling",
      icon: <FiZap />,
      color: "bg-orange-500",
      desc: "Automated server adjustments to handle traffic spikes without a second of downtime.",
    },
    {
      title: "Security Patches",
      icon: <FiShield />,
      color: "bg-emerald-500",
      desc: "Proactive vulnerability scanning and instant security kernel updates.",
    },
    {
      title: "Zero-Lag Updates",
      icon: <FiRefreshCw />,
      color: "bg-blue-600",
      desc: "Pushing new features and code fixes seamlessly while your users stay active.",
    },
    {
      title: "Priority Helpdesk",
      icon: <FiLifeBuoy />,
      color: "bg-purple-600",
      desc: "Direct access to senior engineers with a guaranteed 30-minute response time.",
    },
  ];

  return (
    <section className="py-20 overflow-hidden bg-white md:py-32">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-12 lg:flex-row md:gap-16">

          {/* Sticky Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/5 lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                Active Monitoring 24/7
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight lg:leading-[0.9] tracking-tight mb-6 md:mb-8">
              We Breathe <br />
              <span className="text-blue-600">Life</span> Into Your <br />
              Digital Assets.
            </h2>

            <p className="text-base font-light leading-relaxed sm:text-lg md:text-xl text-slate-500">
              Launch is just the beginning. Our maintenance engine ensures your system evolves, scales, and stays unbreakable in a shifting digital landscape.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 pt-6 lg:w-3/5 sm:grid-cols-2 md:gap-8 md:pt-12"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[50px] bg-slate-50 border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-2xl transition-all duration-500 group ${i % 2 !== 0 ? "md:mt-10" : ""
                  }`}
              >
                <div
                  className={`${item.color} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl text-white mb-6 md:mb-8 group-hover:rotate-12 transition-transform`}
                >
                  {item.icon}
                </div>

                <h4 className="mb-3 text-lg font-black sm:text-xl md:text-2xl text-slate-900 md:mb-4">
                  {item.title}
                </h4>

                <p className="text-sm font-light leading-relaxed sm:text-base text-slate-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MaintenanceHub;
