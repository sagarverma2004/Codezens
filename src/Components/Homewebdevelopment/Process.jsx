import { motion } from "framer-motion";

function Process() {
    const steps = [
        { title: "01. Strategy", desc: "Understanding your goals and crafting a scalable roadmap." },
        { title: "02. Design & Dev", desc: "Building clean UI with high-performance, maintainable code." },
        { title: "03. Launch", desc: "Testing, optimizing and deploying with confidence." }
    ];

    return (
        <section className="text-gray-900 py-28 bg-linear-to-b from-white to-gray-50">
            <div className="px-6 mx-auto text-center max-w-7xl">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 text-4xl font-bold md:text-5xl"
                >
                    Our Process
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-20 text-gray-500"
                >
                    A refined and efficient workflow designed to deliver high-quality results.
                </motion.p>

                {/* Steps */}
                <div className="relative grid gap-12 md:grid-cols-3">
                    {steps.map((step, i) => {
                        const [num, text] = step.title.split(".");
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="relative p-8 transition-all duration-300 bg-white border border-gray-200 shadow-sm group rounded-2xl hover:shadow-xl"
                            >
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1 transition bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-t-2xl opacity-80 group-hover:opacity-100" />

                                {/* Number Circle */}
                                <div className="flex justify-center mb-6">
                                    <div className="flex items-center justify-center w-16 h-16 text-xl font-bold text-indigo-600 transition rounded-full bg-indigo-50 group-hover:bg-indigo-100">
                                        {num}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="mb-2 text-xl font-semibold">
                                    {text}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-gray-500">
                                    {step.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Process;
