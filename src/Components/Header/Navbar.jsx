import { Link } from "react-router-dom"
import {  IoIosArrowRoundForward } from "react-icons/io"
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { RiBarChartLine } from "react-icons/ri";
import { useState } from "react"
import codezens from "../Header/img/codezens.png"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="px-4 py-4 mx-auto max-w-7xl">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
                            src={codezens}
                            alt="nav-logo"
                            className="object-contain h-10 md:h-14"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-5 lg:gap-10 text-[#555555] font-medium text-md lg:text-xl">
                        {["about", "service", "work", "insight", "careers"].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ y: -3, rotate: 0, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <Link to={`/${item}`} className="capitalize hover:text-[#000000] hover:underline underline-offset-20 transition-colors">
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Sirf Tablet/Desktop (md) se dikhega */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="items-center hidden gap-5 md:flex"
                    >

                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
                        >
                            <Link to="/Contact" className="flex items-center gap-2 px-5 py-2 bg-[#FFCD00] font-semibold hover:opacity-90 transition rounded-xs">
                                Contact Us
                                <IoIosArrowRoundForward className="text-xl" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Mobile Menu Button - Sirf Mobile par dikhega */}
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
                            {isOpen ? <RiBarChartLine/> : <RiBarChartHorizontalLine />}
                        </button>
                    </div>

                </div>

                {/* Mobile Dropdown - Isme bhi hide kar diya gaya hai */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-5 flex flex-col gap-4 text-[#555555] font-medium border-t pt-4"
                        >
                            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#FFCD00]">About</Link>
                            <Link to="/service" onClick={() => setIsOpen(false)} className="hover:text-[#FFCD00]">Service</Link>
                            <Link to="/work" onClick={() => setIsOpen(false)} className="hover:text-[#FFCD00]">Work</Link>
                            <Link to="/insight" onClick={() => setIsOpen(false)} className="hover:text-[#FFCD00]">Insight</Link>
                            <Link to="/careers" onClick={() => setIsOpen(false)} className="hover:text-[#FFCD00]">Careers</Link>

                            {/* Note: Search aur Contact button yahan se hata diye gaye hain taaki mobile par na dikhein */}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    )
}

export default Navbar
