import React from "react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function QaScanningSection() {
    return (
        <section className="py-16 md:py-32 bg-[#020617] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="flex flex-col items-center gap-12 px-6 mx-auto max-w-7xl lg:flex-row md:gap-20 lg:gap-24">

                {/* Left - Scanner */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative w-full lg:w-1/2"
                >
                    <div className="w-full h-100 sm:h-125 md:h-130 rounded-2xl md:rounded-[60px] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 md:p-8 relative flex flex-col justify-center gap-4 md:gap-6 overflow-hidden">

                        {/* Scanner Line */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1 bg-linear-150-to-r from-transparent via-[#00FF87] to-transparent z-20"
                        />

                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                initial="hidden"
                                animate="visible"
                                className="flex items-center gap-3 px-4 border h-14 md:h-16 bg-white/5 rounded-xl md:rounded-2xl border-white/5 md:px-6 md:gap-4"
                            >
                                <div
                                    className={`w-3 h-3 rounded-full ${i === 3 ? "bg-red-500 animate-pulse" : "bg-[#00FF87]"
                                        }`}
                                />
                                <div className="w-full h-2 overflow-hidden rounded-full bg-white/10">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: i === 1 ? "75%" : "100%" }}
                                        transition={{ duration: 1, delay: i * 0.3 }}
                                        className="h-full bg-[#00FF87]/40"
                                    />
                                </div>
                            </motion.div>
                        ))}

                        <p className="font-mono text-[9px] sm:text-[10px] text-gray-500 text-center uppercase tracking-[0.4em] md:tracking-[0.5em] mt-2 md:mt-4">
                            System_Analysis_Running...
                        </p>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl md:leading-none md:tracking-tighter">
                        ZERO <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00FF87] to-blue-500 italic">
                            COMPROMISE.
                        </span>
                    </h2>

                    <div className="mt-8 space-y-8 md:mt-12 md:space-y-10">

                        <motion.div variants={item} className="flex gap-4 md:gap-8 group">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white/10 group-hover:text-[#00FF87] transition-colors">
                                01
                            </span>
                            <div>
                                <h4 className="mb-1 text-lg font-bold text-white sm:text-xl md:text-2xl md:mb-2">
                                    Unit & Integration Testing
                                </h4>
                                <p className="text-sm font-light leading-relaxed text-gray-500 md:text-base">
                                    Checking individual components and their synergy to ensure absolute stability.
                                </p>
                            </div>
                        </motion.div>

                        <div className="w-full h-px bg-white/10" />

                        <motion.div variants={item} className="flex gap-4 md:gap-8 group">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white/10 group-hover:text-[#00FF87] transition-colors">
                                02
                            </span>
                            <div>
                                <h4 className="mb-1 text-lg font-bold text-white sm:text-xl md:text-2xl md:mb-2">
                                    Performance Stress Test
                                </h4>
                                <p className="text-sm font-light leading-relaxed text-gray-500 md:text-base">
                                    Simulating millions of users to find the breaking point of your infrastructure.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default QaScanningSection;
