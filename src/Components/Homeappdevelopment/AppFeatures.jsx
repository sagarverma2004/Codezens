import React from "react";
import { motion } from "framer-motion";

function AppFeatures() {

    const features = [
        { title: "Offline Mode", icon: "📶", color: "bg-gray-50" },
        { title: "Real-time Sync", icon: "🔄", color: "bg-green-50" },
        { title: "Push Notifications", icon: "🔔", color: "bg-yellow-50" },
        { title: "Secure Payments", icon: "💳", color: "bg-purple-50" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20 md:py-28 bg-linear-to-b from-white to-gray-50">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12 md:mb-16"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Power-Packed Features
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
                    Designed to deliver performance, reliability and seamless user experience.
                </p>
            </motion.div>

            {/* Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6"
            >
                {features.map((feat, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        whileHover={{ y: -8, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="group p-6 md:p-8 bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
                    >
                        {/* Icon */}
                        <motion.div
                            className={`w-14 h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center rounded-2xl text-2xl md:text-3xl mb-4 md:mb-5 ${feat.color}`}
                            whileHover={{ rotate: 8, scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            {feat.icon}
                        </motion.div>

                        {/* Title */}
                        <h4 className="text-base md:text-lg font-semibold text-gray-800">
                            {feat.title}
                        </h4>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default AppFeatures;
