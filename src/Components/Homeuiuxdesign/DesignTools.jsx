import React from 'react'
import { motion } from 'framer-motion'
// Yahan dhyan dena, maine SiAdobeaftereffects ko SiAftereffects se badal diya hai
import {
    SiFigma,
    SiAdobexd,
    SiAdobephotoshop,
    SiAftereffects, // Ye naam try karo
    SiFramer,
    SiSketch
} from "react-icons/si";

function DesignTools() {

    const tools = [
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: "Adobe XD", icon: <SiAdobexd className="text-[#FF61F6]" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
        { name: "After Effects", icon: <SiAftereffects className="text-[#9999FF]" /> },
        { name: "Framer", icon: <SiFramer className="text-black" /> },
        { name: "Sketch", icon: <SiSketch className="text-[#FDB300]" /> }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section className="py-16 md:py-24 bg-[#F9F9FB]">
            <div className="px-4 mx-auto text-center max-w-7xl sm:px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl md:mb-4">
                        Mastering the Craft
                    </h2>
                    <p className="text-sm text-gray-500 sm:text-base">
                        We use the world's best design tools to bring your ideas to life.
                    </p>
                </motion.div>

                {/* Tools Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 sm:gap-6"
                >
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="flex flex-col items-center justify-center gap-3 p-5 transition-all bg-white border border-gray-100 shadow-sm w-36 sm:w-44 md:w-52 sm:p-6 md:p-8 rounded-3xl hover:shadow-xl sm:gap-4 group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 6 }}
                                className="text-3xl sm:text-4xl md:text-5xl"
                            >
                                {tool.icon}
                            </motion.div>

                            <span className="text-sm font-bold tracking-tight text-center text-gray-800 sm:text-base">
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default DesignTools
