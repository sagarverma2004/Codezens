import { FiArrowRight } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

function MaintenanceCycle() {
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

    const data = [
        {
            step: "Analyze",
            label: "L1 Audit",
            desc: "Weekly deep-scans of your entire codebase to identify deprecated libraries and performance leaks.",
        },
        {
            step: "Optimize",
            label: "L2 Enhancement",
            desc: "Refining queries and assets to maintain high-speed loading as your data grows.",
        },
        {
            step: "Scale",
            label: "L3 Growth",
            desc: "Preparing your infrastructure for the next 100k users with zero architectural stress.",
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-slate-50">
            {/* Heading */}
            <div className="px-6 mx-auto mb-16 text-center max-w-7xl md:mb-24">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                    Maintenance Without Friction.
                </h2>
            </div>

            {/* Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-3xl md:rounded-[60px] overflow-hidden bg-white shadow-xl"
            >
                {data.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className={`p-8 sm:p-10 md:p-12 flex flex-col justify-between transition-all duration-500 hover:bg-slate-900 group ${i !== data.length - 1
                            ? "border-b md:border-b-0 md:border-r border-slate-200"
                            : ""
                            }`}
                    >
                        <div>
                            <span className="text-xs font-black tracking-widest text-blue-600 uppercase sm:text-sm group-hover:text-blue-400">
                                {item.label}
                            </span>
                            <h3 className="mt-3 mb-4 text-2xl font-black sm:text-3xl md:text-4xl text-slate-900 group-hover:text-white">
                                {item.step}
                            </h3>
                            <p className="text-sm font-light leading-relaxed sm:text-base text-slate-500 group-hover:text-slate-400">
                                {item.desc}
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mt-8 text-sm font-bold sm:text-base text-slate-900 group-hover:text-white">
                            Explore Logic
                            <FiArrowRight className="transition-transform group-hover:translate-x-2" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Back Button */}
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

export default MaintenanceCycle;
