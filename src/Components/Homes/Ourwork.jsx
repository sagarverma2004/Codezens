import { IoIosArrowRoundForward } from "react-icons/io"
import our1 from "./img/our1.png"
import our2 from "./img/our2.png"
import our3 from "./img/our3.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Ourwork() {

    return (
        <>
            <section className="px-4 py-20 overflow-hidden">
                <div className="mx-auto max-w-7xl">

                    {/* Contain-flex */}
                    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                        <div className="text-center md:text-left">
                            <motion.p
                                initial={{ opacity: 0, x: -100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="mx-auto mb-5 text-2xl md:text-5xl max-w-122 leadind:8 md:leading-12 ">
                                Our Work
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-xs md:text-md lg:text-xl text-[#555555] max-w-122 mx-auto leading-4">
                                From startups to enterprises, our work speaks for itself — in numbers.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                            whileHover={{ scale: 1.05, }}
                            whileTap={{ scale: 0.95, }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="">
                            <Link to="/work#projects-section">
                                <button className="flex items-center gap-2 px-3 lg:px-5 py-1 lg:py-2 bg-[#FFCD00] font-semibold hover:opacity-90 transition cursor-pointer text-sm md:text-lg">
                                    See All Project
                                    <IoIosArrowRoundForward className="text-xl" />
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image-flex */}
                    <div className="flex flex-col gap-5 py-20">

                        {/* 1 */}
                        <div className="flex flex-col md:flex-row bg-[#EFF1FF]">
                            <div className=" md:w-[50%] lg:w-[40%]">
                                <motion.img
                                    initial={{ opacity: 0, x: -100, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    src={our1}
                                    alt=""
                                    className="object-cover h-full w-180" />
                            </div>
                            <div className="px-4 lg:px-18 py-7 md:py-12 lg:py-15 md:w-[50%] lg:w-[60%] text-center md:text-left">
                                <motion.h1
                                    initial={{ opacity: 0, x: 100, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="pb-2 text-xl md:text-2xl lg:text-4xl md:pb-5 ">
                                    FinEdge — Fintech Platform
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, x: 100, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="text-[#555555]  text-sm md:text-md lg:text-lg ">
                                    We helped FinEdge simplify digital payments for small businesses.From onboarding to transactions, the new platform improved speed, security, and user experience — cutting processing time by 70%.
                                </motion.p>
                                <Link to="/project/finedge">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100, }}
                                        whileInView={{ opacity: 1, x: 0, }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        className="flex items-center gap-2 hover:gap-5 duration-500 hover:pl-5 mt-auto pt-25 text-sm md:text-xl cursor-pointer hover:bg-[#e1e6ff] font-light italic ">
                                        Explore the Projects
                                        <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                                    </motion.div>
                                </Link>
                            </div>
                        </div>


                        {/* 2 */}
                        <div className="flex flex-col md:flex-row bg-[#EFF1FF]">
                            <div className=" md:w-[50%] lg:w-[40%]">
                                <motion.img
                                    initial={{ opacity: 0, x: -100, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    src={our2}
                                    alt=""
                                    className="object-cover h-full w-180" />
                            </div>
                            <div className="px-4 lg:px-18 py-7 md:py-12 lg:py-15 md:w-[50%] lg:w-[60%] text-center md:text-left">
                                <motion.h1
                                    initial={{ opacity: 0, x: 100, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="pb-2 text-xl md:text-2xl lg:text-4xl md:pb-5">
                                    Wellnest — Health & Wellness App
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, x: 100, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="text-[#555555]  text-sm md:text-md lg:text-lg">
                                    A health companion app that motivates daily wellness habits through design and behavior insights.
                                    <span className="block pt-5">
                                        With personalized journeys and clean UX, Wellnest reached 2M+ active users within months.
                                    </span>
                                </motion.p>
                                <Link to="/project/wellnest">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100, }}
                                        whileInView={{ opacity: 1, x: 0, }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        className="flex items-center gap-2 hover:gap-5 duration-500 hover:pl-5 mt-auto pt-25 text-sm md:text-xl cursor-pointer hover:bg-[#e1e6ff] font-light italic ">
                                        Explore the Projects
                                        <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                                    </motion.div>
                                </Link>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="flex flex-col md:flex-row bg-[#EFF1FF]">
                            <div className=" md:w-[50%] lg:w-[40%]">
                                <motion.img
                                    initial={{ opacity: 0, x: -100, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    src={our3}
                                    alt=""
                                    className="object-cover h-full w-180" />
                            </div>
                            <div className="px-4 lg:px-18 py-7 md:py-12 lg:py-15 md:w-[50%] lg:w-[60%] text-center md:text-left">
                                <motion.h1
                                    initial={{ opacity: 0, x: 100, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="pb-2 text-xl md:text-2xl lg:text-4xl md:pb-5">
                                    NovaCart — E-Commerce Revamp
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, x: 100, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="text-[#555555]  text-sm md:text-md lg:text-lg">
                                    We rebuilt NovaCart’s shopping platform for today’s users — faster loads, smoother checkout, and mobile-first design.
                                    <span className="block pt-5">
                                        The result? 42% higher conversion and a 4.9⭐️ user rating.
                                    </span>
                                </motion.p>
                                <Link to="/project/novacart">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100, }}
                                        whileInView={{ opacity: 1, x: 0, }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        className="flex items-center gap-2 hover:gap-5 duration-500 hover:pl-5 mt-auto pt-25 text-sm md:text-xl cursor-pointer hover:bg-[#e1e6ff]  font-light italic">
                                        Explore the Projects
                                        <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="border border-[#FFCC00] relative flex items-center justify-center w-full max-w-xs md:max-w-max mx-auto"
                >
                    <Link to="/work#projects-section" className="flex justify-center w-full">
                        <button className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#FFCD00] font-semibold hover:opacity-90 transition absolute -top-5 md:-top-6 text-sm md:text-lg whitespace-nowrap shadow-lg">
                            Book a Strategy call
                            <IoIosArrowRoundForward className="text-xl md:text-2xl" />
                        </button>
                    </Link>
                </motion.div>
            </section>
        </>
    )
}

export default Ourwork
