import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from "react-router-dom"

function DesignServices() {

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

    const services = [
        {
            title: "UI Design",
            icon: "🎨",
            desc: "Creating pixel-perfect interfaces that align with your brand identity.",
            features: ["Visual Hierarchy", "Typography & Color Theory", "Iconography Design", "Component Libraries"]
        },
        {
            title: "UX Research",
            icon: "🔍",
            desc: "Understanding user behavior to build journey-driven products.",
            features: ["User Personas", "Empathy Mapping", "Usability Testing", "Competitive Analysis"]
        },
        {
            title: "Prototyping",
            icon: "⚙️",
            desc: "Bringing static designs to life with interactive user flows.",
            features: ["Low-fidelity Wireframes", "High-fidelity Prototypes", "Micro-interactions", "Developer Handoff"]
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
        <section className="py-16 bg-white md:py-24">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="px-4 mx-auto mb-10 text-center max-w-7xl sm:px-6 md:mb-16"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
                    Designing for the
                    <span className="block text-transparent bg-clip-text bg-linear-to-r from-neutral-400 to-neutral-600">
                        Human Connection
                    </span>
                </h2>

                <p className="text-[#555] mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto">
                    We don't just make things look pretty; we make them work seamlessly for your users.
                </p>
            </motion.div>

            {/* Cards */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10 sm:px-6"
            >
                {services.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={card}
                        whileHover={{ y: -8, scale: 1.03 }}
                        className="p-6 transition-all duration-500 border border-gray-100 sm:p-8 md:p-10 rounded-3xl bg-neutral-100/60 hover:shadow-2xl group"
                    >
                        {/* Icon */}
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            className="inline-block mb-4 text-4xl sm:text-5xl md:text-6xl md:mb-6"
                        >
                            {item.icon}
                        </motion.div>

                        {/* Title */}
                        <h3 className="mb-3 text-xl font-bold sm:text-2xl md:mb-4">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-4 text-sm font-light leading-relaxed text-gray-600 md:mb-6 sm:text-base">
                            {item.desc}
                        </p>

                        {/* Features */}
                        <ul className="pt-4 space-y-2 text-left border-t border-gray-200 md:space-y-3 md:pt-6">
                            {item.features.map((feat, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-xs font-medium text-gray-700 sm:text-sm"
                                >
                                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                    {feat}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>

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

export default DesignServices
