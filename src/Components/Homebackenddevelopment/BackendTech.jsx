import React from 'react'
import { motion } from 'framer-motion'

function BackendTech() {

    const techs = ["Node.js", "Python", "GoLang", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Express"];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    }

    return (
        <section className="py-16 md:py-24 bg-[#f4f4f4]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-[#333]"
                >
                    Powered by Modern Tech Stack
                </motion.h2>

                {/* Tech Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
                >
                    {techs.map((tech, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -8, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-36 sm:w-44 md:w-52 lg:w-60 p-4 sm:p-5 md:p-6 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all flex items-center justify-center font-semibold sm:font-bold text-base sm:text-lg md:text-xl text-gray-700"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default BackendTech
