import { IoIosArrowRoundForward } from "react-icons/io"
import { motion } from "framer-motion"

function Timetoupgrade() {
    return (
        <>
            <section className="px-4 py-20 md:py-40">
                <div className="max-w-7xl mx-auto bg-[#E9E3DE]">
                    <div className="px-5 py-12 lg:px-40 lg:py-25">
                        <motion.p
                            initial={{ opacity: 0, y: 100, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="pb-12 text-2xl leading-8 text-center md:leading-10 md:text-4xl lg:text-6xl lg:leading-16 ">
                            Website not keeping up with your business? Time for an upgrade.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                            whileHover={{ scale: 1.05, }}
                            whileTap={{ scale: 0.95, }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex justify-center item-center">
                            <button className="flex items-center gap-2 px-5 py-2 bg-[#FFCD00] font-semibold hover:opacity-90 transition w-fit text-sm md:text-xl">
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

export default Timetoupgrade
