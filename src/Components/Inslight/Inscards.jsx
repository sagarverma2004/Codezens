import { IoArrowForward } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import in1 from "../Inslight/img/in1.png"
import in2 from "../Inslight/img/in2.png"
import in3 from "../Inslight/img/in3.png"
import in4 from "../Inslight/img/in4.png"
import in5 from "../Inslight/img/in5.png"
import in6 from "../Inslight/img/in6.png"
import in7 from "../Inslight/img/in7.png"
import in8 from "../Inslight/img/in8.png"
import in9 from "../Inslight/img/in9.png"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Inscards() {

    const cardParent = {
        hidden: {},
        show: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
    }

    const cardChild = {
        hidden: { opacity: 0, y: 100, },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, } }

    }

    return (
        <>
            <section className='px-4 my-10'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        variants={cardParent}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className='inline-grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>

                        {/* 1 */}
                        <motion.div
                            variants={cardChild}
                            className=''>
                            <img src={in1} alt=""
                                className="object-cover w-full pb-5" />
                            <div>
                                <p className="pb-3 text-2xl">
                                    How Good UX Improves Your Product’s ROI
                                </p>
                                <p className="text-sm text-[#555555] w-80">
                                    A quick breakdown of why design isn’t just visual — it’s a business advantage.
                                </p>
                                <Link to="/card1" className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                    Read More
                                    <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* 2 */}
                        <motion.div
                            variants={cardChild}
                            className=''>
                            <img src={in2} alt=""
                                className="object-cover w-full pb-5" />
                            <p className="pb-3 text-2xl">
                                Transforming Loading Speeds into Scalable Revenue Growth
                            </p>
                            <p className="text-sm text-[#555555] w-80">
                                A quick breakdown of why design isn’t just visual — it’s a business advantage.
                            </p>
                            <Link to="/card2" className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Read More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link >
                        </motion.div>

                        {/* 3 */}
                        <motion.div
                            variants={cardChild}
                            className=''>
                            <img src={in3} alt=""
                                className="object-cover w-full pb-5" />
                            <p className="pb-3 text-2xl">
                                Maximizing Conversions through Frictionless Navigation Logic
                            </p>
                            <p className="text-sm text-[#555555] w-80">
                                A quick breakdown of why design isn’t just visual — it’s a business advantage.
                            </p>
                            <Link to="/card3" className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Read More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* 4 */}
                        <motion.div
                            variants={cardChild}
                            className=''>
                            <img src={in4} alt=""
                                className="object-cover w-full pb-5" />
                            <p className="pb-3 text-2xl">
                               Building Brand Authority with High-Performance Visual Identity
                            </p>
                            <p className="text-sm text-[#555555] w-80">
                                A quick breakdown of why design isn’t just visual — it’s a business advantage.
                            </p>
                            <Link to="/card4" div className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Read More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>

                        </motion.div>

                        {/* 5 */}
                        <motion.div
                            variants={cardChild}
                            className=''>
                            <img src={in5} alt=""
                                className="object-cover w-full pb-5" />
                            <p className="pb-3 text-2xl">
                                Expanding Market Reach with Inclusive and Accessible Engineering
                            </p>
                            <p className="text-sm text-[#555555] w-80">
                                A quick breakdown of why design isn’t just visual — it’s a business advantage.
                            </p>
                            <Link to="/card5" className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Read More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* 6 */}
                        <motion.div
                            variants={cardChild}
                            className=''>
                            <img src={in6} alt=""
                                className="object-cover w-full pb-5" />
                            <p className="pb-3 text-2xl">
                              Reducing Operational Costs via Self-Service User Experience
                            </p>
                            <p className="text-sm text-[#555555] w-80">
                                A quick breakdown of why design isn’t just visual — it’s a business advantage.
                            </p>
                            <Link to="/card6" className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Read More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* 7 */}
                        <motion.div
                            variants={cardChild}
                            className=''>
                            <img src={in7} alt=""
                                className="object-cover w-full pb-5" />
                            <p className="pb-3 text-2xl">
                                Driving Mobile Engagement with Responsive First-Class Design
                            </p>
                            <p className="text-sm text-[#555555] w-80">
                                A quick breakdown of why design isn’t just visual — it’s a business advantage.
                            </p>
                            <Link to="/card7" className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Read More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* 8 */}
                        <motion.div
                            variants={cardChild}
                            className=''>
                            <img src={in8} alt=""
                                className="object-cover w-full pb-5" />
                            <p className="pb-3 text-2xl">
                                Optimizing Checkout Workflows to Eliminate Cart Abandonment
                            </p>
                            <p className="text-sm text-[#555555] w-80">
                                A quick breakdown of why design isn’t just visual — it’s a business advantage.
                            </p>
                            <Link to="/card8" className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Read More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                        {/* 9 */}
                        <motion.div
                            variants={cardChild}
                            className=''>
                            <img src={in9} alt=""
                                className="object-cover w-full pb-5" />
                            <p className="pb-3 text-2xl">
                                Leveraging Interactive Micro-Moments for Higher User Retention
                            </p>
                            <p className="text-sm text-[#555555] w-80">
                                A quick breakdown of why design isn’t just visual — it’s a business advantage.
                            </p>
                            <Link to="/card9" className="flex items-center gap-2 pt-10 mt-auto text-sm duration-500 cursor-pointer hover:gap-5 hover:pl-5 md:text-xl hover:bg-stone-100">
                                Read More
                                <IoIosArrowRoundForward className="bg-[#FFCD00]" />
                            </Link>
                        </motion.div>

                    </motion.div>
                    <div className="flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                            whileHover={{ scale: 1.05, }}
                            whileTap={{ scale: 0.95, }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex items-center justify-center gap-2 mt-20 bg-[#FFCD00] w-fit px-5 py-2">
                            Next
                            <IoArrowForward />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Inscards
