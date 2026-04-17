import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

function Getinsight() {
    return (
        <>
            <section className="py-5 md:py-20 px-4">
                <div className="max-w-7xl mx-auto bg-[#E9E3DE]">
                    <div className="px-5 lg:px-40 py-12 lg:py-15">
                        <motion.p
                            initial={{ opacity: 0, y: 80, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-2xl md:text-6xl text-center pb-5 md:pb-12 leading-8 md:leading-16 max-w-170 mx-auto ">
                            Get Insights Delivered to Your Inbox
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 80, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className='text-md font-light text-[#3c3a3a] text-center pb-10'>
                            No spam. Just practical, useful content to help you build smarter.
                        </motion.p>
                        <div className=" flex flex-col gap-3 md:gap-0 md:flex-row justify-center items-center">
                            <motion.input
                                initial={{ opacity: 0, x: 50, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                type="text" placeholder="Enter Email Id" className="px-5 h-12  border-2 border-gray-500 outline-none md:w-70" />




                            <motion.button
                                initial={{ opacity: 0, x: -50, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="flex justify-center items-center gap-2 hover:gap-5 duration-500 bg-amber-300 h-12 px-5 ">
                                subscribe
                                <IoIosArrowRoundForward className="text-3xl py-1" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Getinsight
