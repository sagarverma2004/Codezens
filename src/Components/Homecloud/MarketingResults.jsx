import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

function MarketingResults() {

    const results = [
        { client: "TechCorp Inc.", growth: "312%", icon: "🏢" },
        { client: "EcoShop", growth: "440%", icon: "🌿" },
        { client: "FastFit App", growth: "198%", icon: "📱" },
        { client: "FutureLearn", growth: "225%", icon: "🎓" }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section className="py-16 md:py-24 bg-[#F9F9FB]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-[#333]">
                        Proven Performance for Global Brands
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                        See how we turned generic traffic into industry-dominating growth.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                >
                    {results.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -8, scale: 1.04 }}
                            className="p-5 sm:p-6 md:p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group flex flex-col items-center gap-2 sm:gap-3"
                        >
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-inner"
                            >
                                {item.icon}
                            </motion.div>

                            <span className="font-medium text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider text-center">
                                {item.client}
                            </span>

                            <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#9D14E6] tracking-tight"
                            >
                                {item.growth}
                            </motion.span>

                            <span className="font-bold text-gray-800 text-xs sm:text-sm mt-1">
                                Growth boost
                            </span>

                            <motion.button
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 text-[#FF2A6D] text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all"
                            >
                                View Case <FiArrowRight />
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default MarketingResults;
