import React from 'react'
import { motion } from 'framer-motion'

function BackendSecurity() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const item = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }

    return (
        <section className="py-16 md:py-24 bg-[#0F172A] text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 md:gap-16">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                        Zero-Vulnerability <br />
                        <span className="text-blue-400">Security Standards</span>
                    </h2>

                    <p className="text-gray-400 mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-light">
                        Security is not an afterthought; it's our foundation. We protect your user data with industry-leading encryption and protocols.
                    </p>

                    {/* Features */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mt-6 md:mt-10 space-y-3 md:space-y-4"
                    >
                        {["End-to-End Encryption", "DDoS Protection", "GDPR Compliance", "JWT & Session Auth"].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 text-sm sm:text-base md:text-lg"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs"
                                >
                                    ✓
                                </motion.div>
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 w-full h-64 sm:h-72 md:h-80 bg-linear-to-br from-blue-900/40 to-purple-900/40 rounded-3xl border border-blue-500/30 flex items-center justify-center relative overflow-hidden"
                >

                    {/* Background texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                    {/* Floating glow */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"
                    />

                    {/* Code */}
                    <p className="relative text-blue-300 font-mono text-xs sm:text-sm p-6 sm:p-10 leading-relaxed italic">
                        // Secure Backend Protocol <br />
                        const securityConfig = {"{"} <br />
                        &nbsp;&nbsp;encryption: "AES-256", <br />
                        &nbsp;&nbsp;firewall: true, <br />
                        &nbsp;&nbsp;auth: "Multi-Factor" <br />
                        {"}"};
                    </p>
                </motion.div>

            </div>
        </section>
    )
}

export default BackendSecurity
