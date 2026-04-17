import { FiCpu, FiZap } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function AiAuthoritySection() {
  
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    const from = location.state?.from;

    if (from === "services-page") {
      navigate("/service", {
        state: { from: "services-page" },
      });
    } else {
      navigate(-1);
    }
  };

  return (
    <section className="py-16 bg-white sm:py-20 md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
        >

          {/* Main Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-8 bg-[#0A0A0A] rounded-3xl sm:rounded-[40px] p-6 sm:p-10 text-white relative overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_80px_rgba(59,130,246,0.25)] transition-all duration-500"
          >
            <div className="absolute inset-0 transition duration-700 opacity-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-center justify-center w-12 h-12 mb-6 text-2xl border sm:w-16 sm:h-16 bg-white/10 backdrop-blur-xl rounded-xl sm:text-3xl border-white/20">
                <FiCpu className="text-blue-400" />
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Neural <br /> Architecture.
              </h2>

              <p className="max-w-md mt-4 text-base text-gray-400 sm:mt-6 sm:text-lg md:text-xl">
                Our proprietary AI models process data with human-like intuition at machine speed.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3 mt-6 sm:mt-10">
              <span className="px-4 py-2 text-xs font-semibold tracking-wider uppercase border rounded-full bg-white/5 border-white/10">
                Self-Learning
              </span>
              <span className="px-4 py-2 text-xs font-semibold tracking-wider uppercase border rounded-full bg-white/5 border-white/10">
                99.9% Uptime
              </span>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="md:col-span-4 bg-[#F0F4FF] rounded-3xl sm:rounded-[40px] p-6 sm:p-10 flex flex-col justify-center border border-blue-100 hover:shadow-xl"
          >
            <div className="text-4xl font-black tracking-tight text-blue-600 sm:text-5xl md:text-6xl">
              500M+
            </div>
            <p className="mt-2 text-xs font-semibold tracking-widest text-blue-900 uppercase">
              Data Points Analyzed
            </p>

            <div className="w-full h-1 mt-4 overflow-hidden bg-blue-200 rounded-full sm:mt-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1 }}
                className="h-full bg-blue-600"
              />
            </div>
          </motion.div>

          {/* Small Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="md:col-span-4 bg-[#6366F1] rounded-3xl sm:rounded-[40px] p-6 sm:p-10 text-white flex flex-col justify-between group"
          >
            <FiZap className="text-3xl transition-transform duration-300 sm:text-4xl group-hover:scale-125" />

            <div>
              <h4 className="text-xl font-bold sm:text-2xl">Turbo-Inference</h4>
              <p className="mt-1 text-sm text-indigo-100">
                Deploy models in under 2 minutes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Back Button */}
      <div className="flex items-center justify-center mt-16 sm:mt-24">
        <motion.button
          whileTap={{ scale: 0.9 }}
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

export default AiAuthoritySection;
