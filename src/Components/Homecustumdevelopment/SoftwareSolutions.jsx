import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from "react-router-dom"

function SoftwareSolutions() {

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

    const solutions = [
        {
            title: "Enterprise ERP",
            desc: "Centralize your business data into one powerful dashboard.",
            features: ["Inventory Tracking", "HR Management", "Automated Billing"]
        },
        {
            title: "Custom CRM",
            desc: "Manage leads and customer relationships with a tailor-made tool.",
            features: ["Sales Pipelines", "Email Automation", "Client Analytics"]
        },
        {
            title: "API Integrations",
            desc: "Connect your existing tools to work together seamlessly.",
            features: ["Third-party Sync", "Data Security", "Cloud Migration"]
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
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16"
                >
                    Solutions Built For You
                </motion.h2>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                >
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={card}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="w-full p-6 sm:p-8 md:p-10 border border-gray-200 rounded-3xl hover:border-blue-400 transition-all group bg-white shadow-md hover:shadow-xl"
                        >
                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4 md:mb-6 text-sm sm:text-base font-light italic">
                                {item.desc}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 md:space-y-3">
                                {item.features.map((feat, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3 text-gray-700 text-sm sm:text-base"
                                    >
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
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

export default SoftwareSolutions
