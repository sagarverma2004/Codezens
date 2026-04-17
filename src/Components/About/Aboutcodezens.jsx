import Abgroup from "./img/Abgroup.png"
import { motion } from "framer-motion"

function Aboutcodezens() {
    return (
        <>
            <section className="px-4 py-12 overflow-hidden md:py-25">
                <div className="mx-auto max-w-7xl ">

                    <div className="flex flex-col gap-4 md:gap-0 md:flex-row">

                        {/* Left-div */}
                        <motion.div
                            initial={{ opacity: 0, x: -100, }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="md:w-[40%] text-center md:text-left">
                            <h1 className="pb-0 text-2xl md:text-5xl md:pb-3">
                                About
                            </h1>
                            <h1 className="pb-3 text-2xl md:text-5xl">
                                Codezens
                            </h1>
                            <p className=" text-[#555555] md:w-70 lg:w-100">
                                A digital product studio built to turn smart ideas into seamless, scalable experiences.
                            </p>
                        </motion.div>

                        {/* right-div */}
                        <div className="md:w-[60%] text-[#555555] text-center md:text-left" >
                            <motion.p
                                initial={{ opacity: 0, x: 100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.2, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="pb-5">
                                CodeZens is a team of designers, developers, and thinkers who believe that great digital products come from a perfect balance of creativity and engineering.We partner with businesses of all sizes - startups, growing brands, and enterprises - to design and build products that are fast, intuitive, and ready for the future.
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, x: 100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="pb-2 text-2xl text-black md:text-3xl">
                                Our focus is simple:
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: 100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="pb-5">
                                understand deeply, design thoughtfully, build precisely, and deliver results that matter.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: 100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                Every project we take on is backed by clear communication, modern technology, and a genuine commitment to helping your business grow. No fluff. No over-complication. Just clean work, real collaboration, and digital solutions that make a difference.
                            </motion.p>
                        </div>
                    </div>

                    <div className="pt-4 md:pt-20">
                        <motion.img
                            initial={{ opacity: 0, x: -100, scale: 0 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            src={Abgroup}
                            alt="Group"
                            className="w-full "
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Aboutcodezens
