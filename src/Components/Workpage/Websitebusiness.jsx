import { IoIosArrowRoundForward } from "react-icons/io"
import { motion } from "framer-motion"

function Websitebusiness() {
    return (
        <>
            <section className="py-15 md:py-40 px-4">
                <div className="max-w-7xl mx-auto bg-[#E9E3DE]">
                    <div className="px-5 lg:px-40 py-12 lg:py-25">
                        <motion.p
                            initial={{ opacity: 0, y: 50, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-2xl md:text-6xl text-center pb-12 leading-8 md:leading-16 ">
                            Ready to Build Something Incredible?
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 50, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className='text-md font-light text-[#4d4c4c] text-center pb-10'>
                            Let’s turn your ideas into digital experiences that grow your business.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                            whileHover={{ scale: 1.05, }}
                            whileTap={{ scale: 0.95, }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex item-center justify-center">
                            <button className="flex items-center gap-2   px-5 py-2 bg-[#FFCD00] font-semibold hover:opacity-90 transition w-fit text-sm md:text-xl">
                                Book a strategy call
                                <IoIosArrowRoundForward className="text-xl" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Websitebusiness
