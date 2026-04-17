import { IoIosArrowRoundForward } from "react-icons/io"
import service1 from "./img/service1.png"
import service2 from "./img/service2.png"
import service3 from "./img/service3.png"
import service4 from "./img/service4.png"
import service5 from "./img/service5.png"
import service6 from "./img/service6.png"
import service7 from "./img/service7.png"
import service8 from "./img/service8.png"
import service9 from "./img/service9.png"
import service10 from "./img/service10.png"
import service11 from "./img/service11.png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigationType } from "react-router-dom";

function Servicedrive() {

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
            <section id="projects-section" className="bg-[#E9E3DE] pt-1 mb-100">
                <div className="px-4 mx-auto max-w-7xl">

                    <div className="relative z-10 py-5 pb-20 md:p-10 -mt-150">
                        <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row md:items-start md:gap-8 mt-150 md:mt-0 md:text-left">

                            <div className="md:w-[50%]">
                                <motion.h1
                                    initial={{ opacity: 0, x: -70 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="pb-3 text-2xl font-bold md:text-4xl lg:text-6xl max-w-100">
                                    Services That Drive Growth
                                </motion.h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="md:w-[50%] font-light">
                                <p className="text-sm md:text-md text-[#555555] md:w-90 lg:w-107 pb-5">
                                    Our end-to-end approach blends strategy, design, and technology to deliver real business outcomes.
                                </p>
                                <p className="text-sm md:text-md text-[#555555] md:w-90 lg:w-107">
                                    Whether you’re building a new product or improving an existing one — our team delivers clarity, quality, and results.
                                </p>
                            </motion.div>

                        </div>
                    </div>

                    <div className="inline-grid items-stretch grid-cols-1 mb-8 bg-white md:grid-cols-2 lg:grid-cols-3 md:my-10">

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
                                state={{ from: "services-page" }}
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
                                state={{ from: "services-page" }}
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
                                state={{ from: "services-page" }}
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
                                state={{ from: "services-page" }}
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
                                state={{ from: "services-page" }}
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
                                state={{ from: "services-page" }}
                                className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Learn More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* c-7 */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-5 lg:border-t md:border-r lg:border-r lg:border-b border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                            <img src={service7} alt="" className="w-12 h-12 mt-5" />
                            <h1 className="mt-5 text-xl md:text-3xl">AI and Machine Learning Solutions</h1>
                            <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                                We build intelligent systems that automate tasks, predict outcomes, and help your business make smarter, data-driven decisions.
                            </p>
                            <Link
                                to="/aisolution"
                                className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Learn More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* c-8 */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-5 lg:border-t lg:border-r lg:border-b border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                            <img src={service8} alt="" className="w-12 h-12 mt-5" />
                            <h1 className="mt-5 text-xl md:text-3xl">Digital Marketing and SEO</h1>
                            <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                                We help you get discovered — improving your online visibility, traffic, and conversions with targeted SEO and digital marketing strategies.
                            </p>
                            <Link
                                to="/digitalmarketing"
                                className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Learn More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* c-9 */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-5 border-t md:border-r lg:border-b border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                            <img src={service9} alt="" className="w-12 h-12 mt-5" />
                            <h1 className="mt-5 text-xl md:text-3xl">CRM and ERP Development</h1>
                            <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                                We design and develop powerful CRM and ERP solutions that streamline operations, improve productivity, and bring all your business processes together.
                            </p>
                            <Link
                                to="/crmanderp"
                                className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Learn More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* c-10 */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-5 border-b md:border-t lg:border-r lg:border-b-0 border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                            <img src={service10} alt="" className="w-12 h-12 mt-5" />
                            <h1 className="mt-5 text-xl md:text-3xl">QA Testing and Automation</h1>
                            <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                                We ensure your product runs flawlessly with end-to-end testing, automated test scripts, and continuous quality checks across all devices.
                            </p>
                            <Link
                                to="/qatesting"
                                className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Learn More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* c-11 */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-5 border-b md:border-t md:border-r lg:border-r lg:border-b-0 border-[#E9E3DE] flex flex-col h-full hover:bg-stone-50">
                            <img src={service11} alt="" className="w-12 h-12 mt-5" />
                            <h1 className="mt-5 text-xl md:text-3xl">Maintenance and Support</h1>
                            <p className="text-xs lg:text-sm text-[#555555] font-serif mt-5">
                                We provide ongoing monitoring, updates, and technical support to keep your website, app, or software secure, fast, and up-to-date.
                            </p>
                            <Link
                                to="/maintenance"
                                className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Learn More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* c-12 */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-10 border-b lg:border-b-0 border-[#E9E3DE] flex flex-col justify-center items-center h-full text-center bg-[#FBF5D9]">

                            <h1 className="mt-5 text-xl md:text-3xl">Have a Project in Mind?</h1>
                            <p className="text-xs md:text-sm text-[#555555] font-serif font-light mt-5">
                                Share your idea and we’ll help you shape it into a clear, actionable plan. No pressure — just a friendly conversation.
                            </p>
                            <Link to="/contact">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                                    whileHover={{ scale: 1.05, }}
                                    whileTap={{ scale: 0.95, }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="flex items-center justify-center gap-2 mt-10 bg-[#FFCD00] w-fit px-5 py-2">
                                    Contact Us
                                    <IoIosArrowRoundForward />
                                </motion.div>
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Servicedrive
