import React from 'react'
import { motion } from 'framer-motion'

function AppPlatforms() {

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
    <section className="py-16 bg-white md:py-24 lg:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16 lg:mb-20"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Platforms We Build For
          </h2>
          <p className="max-w-xl mx-auto text-sm text-gray-500 sm:text-base">
            We deliver high-quality mobile applications tailored for both major ecosystems.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:gap-12"
        >

          {/* iOS Card */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.03, y: -6 }}
            className="relative p-6 overflow-hidden transition-all duration-500 border border-gray-200 group sm:p-8 md:p-10 rounded-3xl bg-linear-to-br from-gray-50 to-white hover:shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-black opacity-70"></div>

            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="flex items-center justify-center text-xl text-white bg-black w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:text-2xl"
              >
                🍎
              </motion.div>

              <div>
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl">iOS Development</h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
                  Premium apps built for the Apple ecosystem using Swift and SwiftUI.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Android Card */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.03, y: -6 }}
            className="relative p-6 overflow-hidden transition-all duration-500 border border-gray-200 group sm:p-8 md:p-10 rounded-3xl bg-linear-to-br from-green-50 to-white hover:shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>

            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="flex items-center justify-center text-xl text-white bg-green-500 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:text-2xl"
              >
                🤖
              </motion.div>

              <div>
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl">Android Development</h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
                  Scalable and robust apps for a global audience using Kotlin and Java.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default AppPlatforms
