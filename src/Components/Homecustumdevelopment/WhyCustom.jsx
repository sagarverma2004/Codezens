import React from 'react'
import { motion } from 'framer-motion'

function WhyCustom() {

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
        <section className="py-16 md:py-24 bg-[#1a1a1a] text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 md:gap-16">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                        Stop Adjusting Your <br /> Business to Software.
                    </h2>

                    <p className="text-gray-400 mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-light">
                        Ready-made tools often slow you down with features you don't need. We build exactly what you want, nothing more, nothing less.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 md:mt-8 px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-blue-600 rounded-full text-sm sm:text-base font-bold hover:bg-blue-700 transition-all"
                    >
                        Get a Free Consultation
                    </motion.button>
                </motion.div>

                {/* Right */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="lg:w-1/2 w-full grid grid-cols-1 gap-4 md:gap-6"
                >
                    <motion.div
                        variants={item}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="p-6 sm:p-8 bg-[#252525] rounded-3xl border-l-4 md:border-l-8 border-blue-600"
                    >
                        <h4 className="text-xl sm:text-2xl font-bold mb-2">Full Ownership</h4>
                        <p className="text-gray-400 text-sm sm:text-base">
                            No monthly licensing fees. You own the code and the data forever.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={item}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="p-6 sm:p-8 bg-[#252525] rounded-3xl border-l-4 md:border-l-8 border-purple-600"
                    >
                        <h4 className="text-xl sm:text-2xl font-bold mb-2">Unlimited Scaling</h4>
                        <p className="text-gray-400 text-sm sm:text-base">
                            As your team grows, the software grows with you without per-user costs.
                        </p>
                    </motion.div>
                </motion.div>

            </div>

        </section>
    )
}

export default WhyCustom
