import wh1 from "../Homes/img/wh1.png"
import wh2 from "../Homes/img/wh2.png"
import wh3 from "../Homes/img/wh3.png"
import whimg from "../Homes/img/whimg.png"
import { motion } from "framer-motion"

function Whycodezens() {
    return (
        <>
            <section className="py-20 bg-[#0F0E0E] px-4">
                <div className="mx-auto max-w-7xl">

                    {/* COntain */}
                    <div className="text-center text-white md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 100, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="pb-2 text-2xl md:text-5xl ">
                            Why Codezens
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 100, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="md:w-95">
                            Because we make building digital products fast, clear, and
                            worry-free.
                        </motion.p>
                    </div>

                    {/* Box */}
                    <div className="inline-grid grid-cols-1 pt-20 md:grid-cols-3 ">

                        {/* 1-div */}
                        <motion.div
                            initial={{ opacity: 0, y: 200, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-white p-5 border md:border-b-[#0F0E0E]  border-[#3B3B3B]">
                            <motion.img
                                initial={{ opacity: 0, y: 50, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                src={wh1}
                                alt=""
                                className=" pb-7" />
                            <motion.h1
                                initial={{ opacity: 0, y: 100, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="pb-5 text-xl md:text-2xl">
                                Design That Works
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 100, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-[#CCCCCC] pb-10 font-semibold font-serif text-xs md:text-sm">
                                We don’t just make things look good — we make them feel right. Every design decision is about clarity, usability, and results.
                            </motion.p>
                            <ol className="pl-5 text-sm list-disc md:text-xs">
                                <motion.li
                                    initial={{ opacity: 0, y: 100, }}
                                    whileInView={{ opacity: 1, y: 0, }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    Research-driven UI/UX</motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 100, }}
                                    whileInView={{ opacity: 1, y: 0, }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    Pixel-perfect execution</motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 100, }}
                                    whileInView={{ opacity: 1, y: 0, }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    User-tested flows</motion.li>
                            </ol>
                        </motion.div>

                        {/* 2-div */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-white p-5 border md:border-r-[#0F0E0E] border-[#3B3B3B] lg:border-l-0"
                        >
                            <motion.img
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                src={wh2}
                                alt=""
                                className="pb-7"
                            />

                            <motion.h1
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="pb-5 text-xl md:text-2xl"
                            >
                                Fast Delivery
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-[#CCCCCC] pb-10 font-semibold font-serif text-xs md:text-sm"
                            >
                                We move quickly without cutting corners. Clear milestones, transparent progress, and on-time launches — every time.
                            </motion.p>

                            <ol className="pl-5 text-sm list-disc md:text-xs">
                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    Agile sprints
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    Weekly updates
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    No delays, no surprises
                                </motion.li>
                            </ol>
                        </motion.div>

                        {/* 3-div */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-white p-5 border border-[#3B3B3B]"
                        >
                            <motion.img
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                src={wh3}
                                alt=""
                                className="pb-7"
                            />

                            <motion.h1
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="pb-5 text-xl md:text-2xl"
                            >
                                Long-Term Partnership
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-[#CCCCCC] pb-10 font-semibold font-serif text-xs md:text-sm"
                            >
                                We don’t just hand off projects — we stay with you to help them grow. Think of us as your long-term tech partner, not a one-time vendor.
                            </motion.p>

                            <ol className="pl-5 text-sm list-disc md:text-xs">
                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    Scalable support
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    Continuous optimization
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    Built for future growth
                                </motion.li>
                            </ol>
                        </motion.div>


                        {/* 4-div */}
                        <div className=" hidden md:flex border border-[#3B3B3B] border-t-[#0F0E0E] pt-5 relative overflow-hidden">

                            <motion.div
                                initial={{ opacity: 0, x: -100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, }}
                                className="border-2 border-[#3B3B3B] h-100 w-100 rounded-full absolute top-25 right-35"></motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, }}
                                className="border-2 border-[#3B3B3B] h-100 w-100 rounded-full absolute top-35 right-15 "></motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 100, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, }}
                                className="border-2 border-[#3B3B3B] h-100 w-100 rounded-full absolute top-70 left-30 "></motion.div>
                        </div>

                        {/* 5-div */}
                        <div>
                            <motion.img
                                initial={{ opacity: 0, y: -100, scale: 0 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                src={whimg}
                                alt=""
                                className="object-cover w-full h-full" />
                        </div>

                        {/* 6 */}
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-white p-5 border border-[#3B3B3B]"
                        >
                            <motion.img
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                src={wh2}
                                alt=""
                                className="pb-7"
                            />

                            <motion.h1
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="pb-5 text-xl md:text-2xl"
                            >
                                24×7 Support
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-[#CCCCCC] pb-10 font-semibold font-serif text-xs md:text-sm"
                            >
                                We’re always just a message away — day or night. Our team monitors, updates, and resolves issues before they become problems.
                            </motion.p>

                            <ol className="pl-5 text-sm list-disc md:text-xs">
                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    Real-time response
                                </motion.li>

                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    On-call consulting
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    User-tested flows
                                </motion.li>
                            </ol>
                        </motion.div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Whycodezens
