import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function QaProcess() {
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

  const steps = ["Strategy", "Scripting", "Execution", "Refining"];

  return (
    <section className="py-16 bg-white md:py-24">
      <div className="px-6 mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 md:flex-row"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex-1 cursor-default group"
            >
              <div className="p-6 sm:p-8 md:p-10 bg-[#F9F9FB] rounded-2xl md:rounded-[40px] border border-transparent group-hover:border-blue-600/20 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500">
                <div className="text-[10px] sm:text-xs font-black text-blue-600 mb-4 md:mb-6 tracking-widest uppercase italic">
                  Phase 0{i + 1}
                </div>

                <h4 className="mb-3 text-lg font-black sm:text-xl md:text-2xl text-slate-900 md:mb-4">
                  {step}
                </h4>

                <p className="text-sm font-light leading-relaxed text-slate-500">
                  Rigorous analysis and documentation to ensure every edge case is covered.
                </p>

                <div className="flex gap-1 mt-6 md:mt-8">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className={`h-1 rounded-full transition-all duration-500 ${dot <= i + 1
                          ? "w-6 md:w-8 bg-blue-600"
                          : "w-2 bg-slate-200"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center px-6 mt-16 md:mt-24">
        <button
          onClick={goBack}
          className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition shadow-md"
        >
          ← Back
        </button>
      </div>
    </section>
  );
}

export default QaProcess;
