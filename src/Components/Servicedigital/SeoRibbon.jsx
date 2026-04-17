import React from "react";
import { motion } from "framer-motion";

function SeoRibbon() {
    const steps = [
        { id: "01", t: "Semantic Audit", d: "Deep crawling to identify structural gaps and hidden SEO issues." },
        { id: "02", t: "Authority Backlinks", d: "High-quality, relevant backlinks that improve rankings and trust." },
        { id: "03", t: "UX Signals", d: "Enhancing user behavior metrics like dwell time and engagement." }
    ];

    return (
        <section className="py-28 bg-linear-to-b from-white to-slate-50">
            <div className="px-6 mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl text-slate-900">
                        Our SEO Process
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500">
                        A strategic, data-driven approach to improve visibility, authority, and long-term growth.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="relative p-px transition-all duration-500 group rounded-3xl bg-slate-900 hover:shadow-2xl"
                        >
                            {/* Gradient Border */}
                            <div className="absolute inset-0 transition duration-500 opacity-0 rounded-3xl bg-linear-to-br from-indigo-500 via-blue-500 to-cyan-400 group-hover:opacity-100"></div>

                            {/* Card Content */}
                            <div className="relative flex flex-col justify-between h-full p-10 overflow-hidden rounded-3xl bg-slate-900">

                                {/* Background Glow */}
                                <motion.div
                                    className="absolute w-40 h-40 rounded-full -top-10 -right-10 bg-indigo-500/20 blur-3xl"
                                    whileHover={{ scale: 1.25 }}
                                    transition={{ duration: 0.7 }}
                                />

                                {/* Step Number */}
                                <span className="font-extrabold transition text-7xl text-white/10 group-hover:text-white">
                                    {step.id}
                                </span>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="mb-3 text-2xl font-semibold text-white">
                                        {step.t}
                                    </h3>
                                    <p className="leading-relaxed text-gray-400">
                                        {step.d}
                                    </p>

                                    {/* Animated Line */}
                                    <motion.div
                                        className="mt-6 h-0.5 w-10 bg-cyan-400"
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SeoRibbon;
