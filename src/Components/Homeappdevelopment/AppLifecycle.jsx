import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from "react-router-dom"

function AppLifecycle() {

    const navigate = useNavigate()
    const location = useLocation()

    const goBack = () => {

        const from = location.state?.from

        if (from === "home-services") {
            navigate("/", {
                state: { from: "home-services" }
            })
        }
        else if (from === "services-page") {
            navigate("/service", {
                state: { from: "services-page" }
            })
        }
        else {
            navigate("/")
        }
    }

    const steps = [
        {
            label: "Wireframing",
            desc: "Creating the blueprint of your app's flow with precision.",
            icon: "🖋️",
            color: "group-hover:bg-blue-500"
        },
        {
            label: "Prototyping",
            desc: "Interactive mockups to feel the real user journey before code.",
            icon: "✨",
            color: "group-hover:bg-purple-500"
        },
        {
            label: "QA Testing",
            desc: "Rigorous testing on 50+ devices to ensure zero-bug performance.",
            icon: "🧪",
            color: "group-hover:bg-green-500"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-4 sm:px-6">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm">
                        Our Workflow
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mt-4 text-[#1a1a1a]">
                        How We Build <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                            Your App
                        </span>
                    </h2>

                    <p className="text-[#555555] mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                        From the first sketch to the final App Store submission, we ensure excellence at every step.
                    </p>

                    <div className="mt-6 md:mt-10 inline-flex items-center gap-2 text-gray-400 font-medium italic justify-center lg:justify-start">
                        <span className="w-10 h-0.5 bg-gray-300"></span>
                        Trusted by innovators
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="lg:w-1/2 w-full space-y-4 md:space-y-6"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-500"
                        >
                            {/* Number */}
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-xl sm:text-2xl font-bold text-gray-400 transition-all duration-500 ${step.color} group-hover:text-white`}
                            >
                                0{index + 1}
                            </motion.div>

                            {/* Content */}
                            <div className="text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                                    <span className="text-lg sm:text-xl">{step.icon}</span>
                                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#222] group-hover:text-blue-600 transition-colors">
                                        {step.label}
                                    </h4>
                                </div>

                                <p className="text-[#666] mt-2 text-sm sm:text-base md:text-lg font-light leading-snug">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
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

export default AppLifecycle
