import hearimg from "../Contact/img/hearimg.png"
import { motion } from "framer-motion"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


function LoveHear() {
    return (
        <>

            <section className="bg-[#E9E3DE] py-12 md:py-20 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-10 ">

                        {/* left-div */}
                        <div className="lg:w-[50%] text-center lg:text-left ">

                            <motion.h1
                                initial={{ opacity: 0, y: 100, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-4xl md:text-7xl pb-4 md:pb-8">
                                We’d Love to Hear From You
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 100, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-sm md:text-xl  text-[#555555] pb-5">
                                Whether you're starting a new project, looking to improve an existing one, or simply want to explore ideas, drop a mail or contact on given number
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 100, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="flex flex-col gap-3">
                                <div className="flex flex-row md:flex-col gap-4 px-8 py-4 bg-white rounded-xl w-full text-[#555555] text-left">
                                    <MdOutlineMarkEmailUnread className="text-2xl text-[#FFCD00]" />
                                    info@codezens.com
                                </div>
                                <div className="flex flex-row md:flex-col gap-4 px-8 py-4 bg-white rounded-xl w-full text-[#555555] text-left">
                                    <FaPhoneAlt className="text-xl text-[#FFCD00]" />
                                    +91 8516012341
                                </div>
                            </motion.div>
                        </div>

                        {/* Right-div */}
                        <div className="lg:w-[50%] flex flex-col lg:flex-row justify-end gap-20 items-center ">
                            <motion.div
                                initial={{ opacity: 0, x: 100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="border-t-2 w-full lg:border-r-2 lg:w-0 border-[#555555] h-full "></motion.div>
                            <div className="">
                                <motion.img
                                    initial={{ opacity: 0, y: 100, scale: 0 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    src={hearimg}
                                    alt=""
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LoveHear;
