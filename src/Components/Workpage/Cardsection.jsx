import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import our1 from "../Homes/img/our1.png"
import our2 from "../Homes/img/our2.png"
import our3 from "../Homes/img/our3.png"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigationType } from "react-router-dom";

function Cardsection() {

    const location = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        // 👉 Sirf navigation pe scroll (PUSH / LINK click)
        if (location.hash && navigationType === "PUSH") {
            const el = document.querySelector(location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });

                    // 👉 hash remove kar do (important)
                    window.history.replaceState(null, "", location.pathname);
                }, 100);
            }
        } else {
            // 👉 Refresh ya direct open → top pe jao
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [location, navigationType]);

    return (
        <>
            <section id="projects-section" className="px-4 my-10 mb-100">
                <div className="mx-auto max-w-7xl">
                    <div className="w-full my-8 border-t-2 border-gray-300 "></div>
                    <div className="flex flex-col gap-5 md:flex-row">
                        <motion.button
                            initial={{ opacity: 0, x: -50, }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="py-2 px-3 bg-[#FFCC00] flex justify-center items-center gap-4">
                            All
                            <IoIosArrowRoundForward />
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, x: -80, }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex items-center justify-center gap-4 px-3 py-2 text-sm border border-gray-300">
                            Saas
                            <IoIosArrowRoundForward />
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, x: -80, }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex items-center justify-center gap-4 px-3 py-2 text-sm border border-gray-300">
                            E-commerce
                            <IoIosArrowRoundForward />
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, x: -80, }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex items-center justify-center gap-4 px-3 py-2 text-sm border border-gray-300">
                            Mobile Apps
                            <IoIosArrowRoundForward />
                        </motion.button>
                    </div>
                    <div className="w-full mt-8 border-t-2 border-gray-300 "></div>

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

                        <div className="flex flex-col gap-5 ">

                            {/* 4 */}
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


                            {/* 5 */}
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

                            {/* 6 */}
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

                    <div className="flex items-center justify-center">
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                            whileHover={{ scale: 1.05, }}
                            whileTap={{ scale: 0.95, }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex items-center justify-center gap-2 bg-[#FFCD00] py-2 px-3">
                            See More
                            <IoIosArrowRoundDown />
                        </motion.button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cardsection
