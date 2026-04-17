import React from 'react'
import { motion } from 'framer-motion'

function SoftwareStats() {

    const stats = [
        { label: "Efficiency Boost", value: "40%", icon: "🚀" },
        { label: "Cost Reduction", value: "25%", icon: "💰" },
        { label: "Scalable Users", value: "1M+", icon: "👥" },
        { label: "Uptime Guarantee", value: "99.9%", icon: "🛡️" }
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
        <section className="py-16 md:py-24 bg-[#f9f9f9]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#1a1a1a]">
                        Measurable Impact, <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                            Built into Every Line
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-[#555] mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-light">
                        We don't just build software; we build growth engines that deliver
                        real-world results and streamline your entire business operations.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
                >
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="p-6 sm:p-8 md:p-10 bg-white border border-gray-100 rounded-3xl text-center shadow-sm hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 8 }}
                                className="text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4"
                            >
                                {item.icon}
                            </motion.div>

                            {/* Value */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-600"
                            >
                                {item.value}
                            </motion.div>

                            {/* Label */}
                            <div className="text-gray-500 font-bold mt-2 uppercase tracking-wider text-[10px] sm:text-xs">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default SoftwareStats;
