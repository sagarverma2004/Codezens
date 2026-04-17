import React from 'react'
import { motion } from 'framer-motion'

function DesignPhilosophy() {

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section className="py-16 md:py-24 bg-[#0F172A] text-white overflow-hidden">

            <div className="flex flex-col items-center gap-10 md:gap-16 px-4 sm:px-6 mx-auto max-w-7xl lg:flex-row">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                        Balancing <span className="text-blue-400/70">Beauty</span> <br /> with Brains.
                    </h2>

                    <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed text-gray-400">
                        A great design is not just what it looks like, but how it works. We ensure every click is intuitive and every interaction is meaningful.
                    </p>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-10"
                    >
                        <motion.div
                            variants={item}
                            whileHover={{ y: -6, scale: 1.03 }}
                            className="p-5 sm:p-6 transition-colors border bg-white/5 rounded-3xl border-white/10 hover:border-rose-500/50"
                        >
                            <h4 className="mb-2 text-lg sm:text-xl font-bold">User-Centric</h4>
                            <p className="text-xs sm:text-sm font-light text-gray-500">
                                Every button and text is placed where users expect it.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={item}
                            whileHover={{ y: -6, scale: 1.03 }}
                            className="p-5 sm:p-6 transition-colors border bg-white/5 rounded-3xl border-white/10 hover:border-pink-500/50"
                        >
                            <h4 className="mb-2 text-lg sm:text-xl font-bold">Accessibility</h4>
                            <p className="text-xs sm:text-sm font-light text-gray-500">
                                Designs that are usable for everyone, including people with disabilities.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex items-center justify-center w-full lg:w-1/2 aspect-square bg-linear-to-br from-rose-500/20 to-indigo-500/20 rounded-3xl border border-white/10"
                >

                    {/* Floating Glass Card */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute w-4/5 h-4/5 p-6 sm:p-8 border shadow-2xl bg-white/5 rounded-3xl backdrop-blur-3xl border-white/20"
                    >
                        <div className="w-10 sm:w-12 h-2 mb-4 rounded-full bg-rose-500"></div>
                        <div className="w-full h-3 sm:h-4 mb-2 rounded-full bg-white/10"></div>
                        <div className="w-2/3 h-3 sm:h-4 mb-6 sm:mb-8 rounded-full bg-white/10"></div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="h-16 sm:h-20 bg-white/5 rounded-2xl"></div>
                            <div className="h-16 sm:h-20 bg-white/5 rounded-2xl"></div>
                        </div>
                    </motion.div>

                    <p className="absolute bottom-6 sm:bottom-10 text-[10px] sm:text-xs font-mono text-gray-500">
                        UX_FLOW_VISUALIZATION.SVG
                    </p>
                </motion.div>

            </div>
        </section>
    )
}

export default DesignPhilosophy
