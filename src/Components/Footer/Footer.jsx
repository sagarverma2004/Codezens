import codezens from "../Header/Img/codezens.png"
import { Link } from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io"
import { FaPhone, FaLocationDot, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

function Footer() {
    return (
        <footer className="bg-[#171515] px-4">
            <div className="max-w-7xl mx-auto py-10 md:py-20">

                <div className="bg-black p-8 md:p-12 rounded-lg">
                    {/* Main Content Grid */}
                    <div className="flex flex-col md:flex-row justify-between gap-10 text-white">

                        {/* Logo and About */}
                        <div className="flex flex-col items-center md:items-start flex-1">
                            <Link to="/">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    src={codezens}
                                    alt="Codezens Logo"
                                    className="h-16 w-24 mb-3 "
                                />
                            </Link>
                            <p className="max-w-xs font-medium text-center md:text-left text-gray-300 ">
                                Codezens IT services is an innovative Web and Mobile app development company based in India.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col items-center md:items-start flex-1">
                            <h2 className="pb-2 text-2xl font-semibold">
                                Quick Links

                            </h2>
                            <div className="w-50 border border-gray-500 mb-6"></div>

                            <div className="flex gap-10 md:gap-16 leading-8">
                                <div className="flex flex-col">
                                    <Link to="/" className="hover:text-yellow-500 duration-300">Home</Link>
                                    <Link to="/about" className="hover:text-yellow-500 duration-300">About Us</Link>
                                    <Link to="/service" className="hover:text-yellow-500 duration-300">Services</Link>
                                </div>
                                <div className="flex flex-col">
                                    <Link to="/work" className="hover:text-yellow-500 duration-300">Work</Link>
                                    <Link to="/insight" className="hover:text-yellow-500 duration-300">Insights</Link>
                                    <Link to="/careers" className="hover:text-yellow-500 duration-300">Careers</Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col items-center md:items-start flex-1 gap-5">
                            <motion.div
                                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                                whileHover={{ scale: 1.05, }}
                                whileTap={{ scale: 0.95, }}
                            >
                                <Link to="/Contact" className="flex items-center gap-2 px-6 py-2 bg-[#FFCD00] font-bold text-black hover:bg-yellow-400 transition-all rounded-sm">
                                    Contact Us
                                    <IoIosArrowRoundForward className="text-2xl" />
                                </Link>
                            </motion.div>

                            <div className="space-y-4 text-sm md:text-base">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                                    <FaLocationDot className="text-[#FFCC00] text-lg" />
                                    <span className="text-gray-300">Rameshwaram Building, 175, Arihant Nagar, Indore, MP 453112</span>
                                </div>

                                <div className="group flex flex-col md:flex-row items-center gap-4 duration-500">

                                    <FaPhone className="text-[#FFCC00] text-lg transition duration-500 group-hover:text-white" />

                                    <a
                                        href="tel:+918516012341"
                                        className="underline transition duration-500 group-hover:text-[#FFCC00]"
                                    >
                                        +91 8516012341
                                    </a>

                                </div>

                                <div className=" group flex flex-col md:flex-row items-center gap-4 hover:text-[#FFCC00]  duration-500">
                                    <MdEmail className="text-[#FFCC00] text-lg group-hover:text-white" />
                                    <a href="mailto:info@codezens.com" className="group-hover:text-[#FFCC00]">info@codezens.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-[#393939] my-10"></div>

                    {/* Bottom Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <p className="text-white text-2xl">Follow us on</p>
                            <div className="flex gap-4 text-2xl text-[#FFCC00]">
                                <a href="#" className="hover:scale-110 transition hover:text-white"><FaLinkedinIn /></a>
                                <a href="#" className="hover:scale-110 transition hover:text-white"><FaFacebook /></a>
                                <a href="#" className="hover:scale-110 transition hover:text-white"><FaInstagram /></a>
                            </div>
                        </div>
                        <p className="text-white text-sm md:text-base text-center md:text-left">
                            2025 @Codezens IT Solution All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
