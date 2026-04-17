import Vinod1 from "./Img/Vinod1.jpeg"
import { motion } from "framer-motion"

function Founder() {
    return (
        <>

            <section className="bg-[#E9E3DE] py-12 md:py-20 px-4 overflow-hidden">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-10 lg:flex-row ">

                        {/* left-div */}
                        <div className="lg:w-[50%] text-center lg:text-left ">
                            <motion.h2
                                initial={{ opacity: 0, y: 100, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="mb-4 text-xl font-medium tracking-widest uppercase md:text-2xl">
                                Founder
                            </motion.h2>
                            <motion.h1
                                initial={{ opacity: 0, y: 100, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="pb-4 text-4xl md:text-7xl md:pb-12">
                                Vinod
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 100, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-sm md:text-md  text-[#555555] ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                <p className="pt-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </motion.p>
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
                                    src={Vinod1}
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

export default Founder
