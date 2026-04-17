import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from "react-router-dom"

function BackendPillars() {

    const navigate = useNavigate()
    const location = useLocation()

    const goBack = () => {
        const from = location.state?.from

        if (from === "home-services") {
            navigate("/", { state: { from: "home-services" } })
        }
        else if (from === "services-page") {
            navigate("/service", { state: { from: "services-page" } })
        }
        else {
            navigate("/")
        }
    }

    const pillars = [
        {
            title: "Scalable Infrastructure",
            icon: "🏗️",
            features: ["Microservices Architecture", "Load Balancing", "Auto-scaling Servers", "Cloud Migration (AWS/Azure)"]
        },
        {
            title: "Database Management",
            icon: "💾",
            features: ["SQL & NoSQL (MongoDB, PostgreSQL)", "Data Indexing & Optimization", "Secure Backup Systems", "Real-time Sync"]
        },
        {
            title: "API Ecosystem",
            icon: "🔌",
            features: ["RESTful & GraphQL APIs", "Third-party Integrations", "OAuth 2.0 Security", "API Documentation (Swagger)"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const card = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section className="py-16 md:py-24 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
                        The Backbone of
                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                            Your Innovation
                        </span>
                    </h2>

                    <p className="text-[#555] mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto">
                        We build the hidden engine that makes your application fast, secure, and unbreakable.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                >
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            variants={card}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="p-6 sm:p-8 md:p-10 border border-gray-100 rounded-3xl bg-[#fbfbfb] hover:shadow-2xl transition-all duration-500 group"
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.15 }}
                                className="text-4xl sm:text-5xl mb-4 md:mb-6 inline-block"
                            >
                                {pillar.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-[#222]">
                                {pillar.title}
                            </h3>

                            {/* Features */}
                            <ul className="space-y-3 md:space-y-4">
                                {pillar.features.map((feat, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 text-gray-600 text-sm sm:text-base font-medium"
                                    >
                                        <span className="mt-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                                        {feat}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='flex items-center justify-center mt-16 md:mt-24'
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goBack}
                    className="px-5 md:px-6 py-2.5 md:py-3 rounded-xl bg-black text-white text-sm md:text-base font-medium hover:bg-gray-800 transition shadow-md"
                >
                    ← Back
                </motion.button>
            </motion.div>

        </section>
    )
}

export default BackendPillars
