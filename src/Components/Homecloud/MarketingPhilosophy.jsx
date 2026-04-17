import { FiPieChart, FiSettings, FiActivity, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

function MarketingPhilosophy() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section className="py-16 md:py-24 bg-[#0F172A] text-white overflow-hidden">

            <div className="flex flex-col items-center gap-10 px-4 mx-auto max-w-7xl sm:px-6 lg:flex-row md:gap-16">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:w-1/2 lg:text-left"
                >
                    <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                        Stop Guessing. <br />
                        Start <span className="text-[#FF2A6D]">Optimizing</span>.
                    </h2>

                    <p className="mt-4 text-sm font-light leading-relaxed text-gray-400 md:mt-6 sm:text-base md:text-lg lg:text-xl">
                        Marketing is not about luck; it's about data. We relentlessly test, track, and tweak your campaigns to squeeze out every drop of performance.
                    </p>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-4 mt-6 md:mt-10 sm:grid-cols-2 md:gap-6"
                    >
                        <motion.div
                            variants={item}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-[#9D14E6]/50 transition-colors"
                        >
                            <h4 className="flex items-center gap-3 mb-2 text-lg font-bold md:text-xl">
                                <FiActivity className="text-[#9D14E6]" /> A/B Testing
                            </h4>
                            <p className="text-xs font-light text-gray-500 sm:text-sm">
                                Testing every headline and visual to find the winner.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={item}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-[#FF6A00]/50 transition-colors"
                        >
                            <h4 className="flex items-center gap-3 mb-2 text-lg font-bold md:text-xl">
                                <FiZap className="text-[#FF6A00]" /> Real-time Analytics
                            </h4>
                            <p className="text-xs font-light text-gray-500 sm:text-sm">
                                Monitoring campaign health 24/7 with live dashboards.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 w-full aspect-square bg-linear-to-br from-[#9D14E6]/20 to-[#FF6A00]/20 rounded-3xl border border-white/10 flex items-center justify-center relative"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute w-40 h-40 rounded-full bg-pink-500/20 blur-3xl"
                    />

                    <div className="absolute w-4/5 p-6 border shadow-2xl h-4/5 bg-white/5 rounded-3xl backdrop-blur-3xl border-white/20 md:p-8">
                        <div className="w-10 md:w-12 h-2 bg-[#FF2A6D] rounded-full mb-4"></div>
                        <div className="w-full h-3 mb-2 rounded-full md:h-4 bg-white/10"></div>
                        <div className="w-2/3 h-3 mb-6 rounded-full md:h-4 bg-white/10 md:mb-8"></div>

                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="flex flex-col items-center justify-center h-16 gap-1 md:h-20 bg-white/5 rounded-2xl md:gap-2">
                                <FiPieChart className="text-3xl md:text-5xl text-[#9D14E6]" />
                                <span className="text-[10px] md:text-xs text-gray-500">CONVERSION</span>
                            </div>
                            <div className="flex flex-col items-center justify-center h-16 gap-1 md:h-20 bg-white/5 rounded-2xl md:gap-2">
                                <FiSettings className="text-3xl md:text-5xl text-[#FF6A00]" />
                                <span className="text-[10px] md:text-xs text-gray-500">OPTIMIZATION</span>
                            </div>
                        </div>
                    </div>

                    <p className="absolute bottom-6 md:bottom-10 text-[10px] md:text-xs font-mono text-gray-500">CAMPAIGN_FLOW.SVG</p>
                </motion.div>

            </div>

        </section>
    )
}

export default MarketingPhilosophy
