import { motion } from "framer-motion";
import { Code, Layers, Zap, Cpu, Sparkles } from "lucide-react";

const techs = [
    { name: "React", icon: Code },
    { name: "Tailwind CSS", icon: Layers },
    { name: "JavaScript", icon: Zap },
    { name: "Node.js", icon: Cpu },
    { name: "Framer Motion", icon: Sparkles },
    { name: "GSAP", icon: Sparkles },
];

function TechStack() {
    return (
        <section className="py-24 text-center bg-linear-to-b from-white to-gray-50">
            <div className="px-6 mx-auto max-w-7xl">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 text-5xl font-extrabold tracking-tight"
                >
                    Technologies We Master
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-16 text-gray-500"
                >
                    We craft modern, scalable, and high-performance applications using the latest technologies.
                </motion.p>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {techs.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="relative p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl"
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 transition duration-500 opacity-0 rounded-2xl bg-linear-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 group-hover:opacity-100" />

                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 transition rounded-xl bg-indigo-50 group-hover:bg-indigo-100">
                                        <Icon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                </div>

                                {/* Text */}
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {tech.name}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TechStack;
