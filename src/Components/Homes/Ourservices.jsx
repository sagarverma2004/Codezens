import { IoIosArrowRoundForward } from "react-icons/io"
import service1 from "../Homes/img/service1.png"
import service2 from "../Homes/img/service2.png"
import service3 from "../Homes/img/service3.png"
import service4 from "../Homes/img/service4.png"
import service5 from "../Homes/img/service5.png"
import service6 from "../Homes/img/service6.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Ourservices() {


    return (
        <section className="bg-[#E9E3DE] pt-1">

            <div className="px-4 mx-auto md:px-0 max-w-7xl">

                {/* our service */}
                <div className="relative z-10 py-5 pb-20 md:p-10 -mt-150 lg:-mt-100">

                    <div className="flex flex-col items-center justify-between gap-8 overflow-hidden text-center md:flex-row md:items-start mt-150 md:mt-0 md:text-left">

                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -200, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="pb-3 text-2xl font-bold md:text-4xl lg:text-6xl">
                                Our Services
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, x: -200, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-xs md:text-md lg:text-xl text-[#555555] md:w-90 lg:w-107">
                                Our end-to-end approach blends strategy, design, and technology to deliver real business outcomes.
                            </motion.p>
                        </div>

                        <Link to="/service#projects-section"
                         state={{ scrollTo: "top" }} >
                            <motion.button
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                                whileHover={{ scale: 1.05, }}
                                whileTap={{ scale: 0.95, }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="mt-10 flex items-center gap-2 px-4 py-2 bg-[#FFCD00] text-sm md:text-xl w-fit mx-auto md:mx-0"
                            >
                                Book a Strategy Call
                                <IoIosArrowRoundForward />
                            </motion.button>
                        </Link>

                    </div>

                </div>

                {/* cards */}
                <motion.div

                    className="inline-grid items-stretch grid-cols-1 mb-8 bg-white md:grid-cols-2 lg:grid-cols-3 md:my-10">

                    {/* c-1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 200, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="p-5 border-b md:border-r lg:border-r lg:border-b border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                        <img src={service1} alt="" className="w-12 h-12 mt-5" />
                        <h1 className="mt-5 text-xl md:text-3xl">Web Development</h1>
                        <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                            We build high-performance websites that are fast, scalable, and crafted to grow with your business.
                        </p>
                        <Link
                            to="/webdevelop"
                            state={{ from: "home-services" }}
                            className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                            Learn More
                            <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                        </Link>
                    </motion.div>

                    {/* c-2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 200, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="p-5 border-b lg:border-r lg:border-b border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                        <img src={service2} alt="" className="w-12 h-12 mt-5" />
                        <h1 className="mt-5 text-xl md:text-3xl">Mobile App Development</h1>
                        <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                            From concept to app store, we design and develop secure, high-performing mobile apps that engage users anywhere, anytime.
                        </p>
                        <Link
                            to="/appdevelop"
                            state={{ from: "home-services" }}
                            className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                            Learn More
                            <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                        </Link>
                    </motion.div>

                    {/* c-3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 200, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="p-5 border-b md:border-r lg:border-r-0 lg:border-b border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                        <img src={service3} alt="" className="w-12 h-12 mt-5" />
                        <h1 className="mt-5 text-xl md:text-3xl">Custom Software Development</h1>
                        <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                            We create tailor-made software solutions that simplify workflows, boost productivity, and scale effortlessly with your business needs.
                        </p>
                        <Link
                            to="/customsoftdevelop"
                            state={{ from: "home-services" }}
                            className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                            Learn More
                            <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                        </Link>
                    </motion.div>

                    {/* c-4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 200, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="p-5 border-b lg:border-r lg:border-b-0 border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                        <img src={service4} alt="" className="w-12 h-12 mt-5" />
                        <h1 className="mt-5 text-xl md:text-3xl">Backend and API Development</h1>
                        <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                            We build secure, efficient, and well-documented APIs and backends — keeping your product reliable, fast, and future-ready.
                        </p>
                        <Link
                            to="/backenddevelop"
                            state={{ from: "home-services" }}
                            className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                            Learn More
                            <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                        </Link>
                    </motion.div>

                    {/* c-5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 200, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="p-5 border-b md:border-r lg:border-r lg:border-b-0 border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                        <img src={service5} alt="" className="w-12 h-12 mt-5" />
                        <h1 className="mt-5 text-xl md:text-3xl">UI/UX Design</h1>
                        <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                            Intuitive, responsive, and beautiful digital experiences that turn casual users into loyal customers.
                        </p>
                        <Link
                            to="/uiuxdesign"
                            state={{ from: "home-services" }}
                            className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                            Learn More
                            <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                        </Link>
                    </motion.div>

                    {/* c-6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 200, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="p-5 border-b lg:border-b-0 border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                        <img src={service6} alt="" className="w-12 h-12 mt-5" />
                        <h1 className="mt-5 text-xl md:text-3xl">Cloud Deployment and Migration</h1>
                        <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                            We make cloud adoption seamless — migrating, deploying, and optimizing your infrastructure for better performance and lower costs.
                        </p>
                        <Link
                            to="/clouddeploy"
                            state={{ from: "home-services" }}
                            className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                            Learn More
                            <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                        </Link>
                    </motion.div>

                </motion.div>

            </div>

        </section>
    )
}

export default Ourservices
