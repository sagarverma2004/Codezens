import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

function MarketingServiceWheel() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    const from = location.state?.from;
    if (from === "services-page") {
      navigate("/service", { state: { from: "services-page" } });
    } else {
      navigate(-1); // fallback
    }
  };

  const list = [
    "Search Engine Optimization",
    "Pay-Per-Click",
    "Social Growth",
    "Content Engine"
  ];

  return (
    <section className="py-32 bg-[#F2F2F2] border-y border-gray-200">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-[-0.05em] text-slate-900">
              FULL <br /> STACK <br />{" "}
              <span className="text-blue-600 underline decoration-8">
                DIGITAL.
              </span>
            </h2>
          </motion.div>

          {/* Service Cards */}
          <div className="space-y-6">
            {list.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="group p-10 bg-white rounded-[40px] border border-transparent hover:border-blue-600 hover:shadow-2xl hover:-translate-y-2 transition-all flex items-center justify-between"
              >
                <span className="text-2xl font-bold text-slate-800">{item}</span>
                <div className="flex items-center justify-center w-12 h-12 transition-all rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white">
                  <FiArrowUpRight className="text-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex items-center justify-center mt-24">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={goBack}
          className="px-6 py-3 font-medium text-white transition bg-black shadow-md rounded-xl hover:bg-gray-800"
        >
          ← Back
        </motion.button>
      </div>
    </section>
  );
}

export default MarketingServiceWheel;
