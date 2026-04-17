import { FiArrowRight } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function ErpProcess() {
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

  const steps = [
    {
      title: "Legacy Audit",
      desc: "Evaluate existing systems and identify gaps for a smooth transition.",
    },
    {
      title: "System Design",
      desc: "Design a scalable ERP architecture aligned with your business needs.",
    },
    {
      title: "Seamless Migration",
      desc: "Securely migrate data and processes without operational disruption.",
    },
    {
      title: "Staff Training",
      desc: "Enable your team with proper training for maximum system efficiency.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-2xl font-semibold sm:text-4xl md:text-5xl text-slate-900">
            Zero-Friction Implementation
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-500 sm:max-w-2xl sm:text-base">
            A streamlined approach to transition your business into a fully integrated digital ecosystem.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.04 }}
              className="flex flex-col justify-between p-6 transition-all duration-300 bg-white border group border-slate-200 rounded-2xl sm:p-8 hover:shadow-xl"
            >
              {/* Step Number */}
              <span className="text-xs font-semibold tracking-wider text-blue-600 sm:text-sm">
                STEP {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="mt-3 sm:mt-4">
                <h4 className="mb-2 text-base font-semibold sm:text-lg text-slate-900">
                  {step.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {step.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-between mt-5 sm:mt-6">
                <div className="h-0.5 w-6 sm:w-8 bg-slate-200 group-hover:w-14 sm:group-hover:w-16 group-hover:bg-blue-600 transition-all duration-300"></div>

                <motion.div
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  className="flex items-center justify-center w-8 h-8 transition border rounded-full sm:w-9 sm:h-9 border-slate-200 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
                >
                  <FiArrowRight size={14} />
                </motion.div>
              </div>
            </motion.div>
          ))}
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

export default ErpProcess;
