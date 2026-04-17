import Techlogo from "./img/Techlogo.png"
import icon1 from "./img/icon1.png"
import icon2 from "./img/icon2.png"
import icon3 from "./img/icon3.png"
import icon4 from "./img/icon4.png"
import icon5 from "./img/icon5.png"
import icon6 from "./img/icon6.png"
import icon7 from "./img/icon7.png"
import icon8 from "./img/icon8.png"
import icon9 from "./img/icon9.png"
import icon10 from "./img/icon10.png"
import icon11 from "./img/icon11.png"
import icon12 from "./img/icon12.png"
import icon13 from "./img/icon13.png"
import icon14 from "./img/icon14.png"
import icon15 from "./img/icon15.png"
import icon16 from "./img/icon16.png"
import icon17 from "./img/icon17.png"
import icon18 from "./img/icon18.png"
import icon19 from "./img/icon19.png"
import icon20 from "./img/icon20.png"
import icon21 from "./img/icon21.png"
import icon22 from "./img/icon22.png"
import icon23 from "./img/icon23.png"
import icon24 from "./img/icon24.png"
import { motion } from "framer-motion"

function Technologies() {

    const Logo = {
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    }

    const childLogo = {
        hidden: { opacity: 0, y: 20, scale: 0, },
        show: {
            opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, }

        }

    }


    return (
        <>
            <section className='bg-[#EDEDFF] py-12 md:py-20 px-4 overflow-hidden'>
                <div className='mx-auto max-w-7xl'>

                    {/* flex-contain */}
                    <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row ">
                        <div className="">
                            <motion.p
                                initial={{ opacity: 0, y: 200, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="mx-auto mb-5 text-2xl leading-8 text-center md:text-3xl lg:text-5xl max-w-122 md:leading-12 md:text-left">
                                Technologies That Power Our Work
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 200, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-xs md:text-sm text-[#555555] max-w-122 mx-auto leading-4 text-center md:text-left">
                                From frontend to cloud, we work with leading technologies that keep every product fast, secure, and scalable.
                            </motion.p>
                        </div>
                        <div className="">
                            <motion.img
                                initial={{ opacity: 0, y: 200, rotate: 1360 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                src={Techlogo}
                                alt="" />
                        </div>
                    </div>

                    <motion.div
                        variants={Logo}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="inline-grid grid-cols-2 mt-10 md:grid-cols-4 lg:grid-cols-6">

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF] md:border-l-0 md:border-t-0 md:border-r-0  p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon1} alt="" />
                            </div>
                            <p>Firebase</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF] md:border-t-0 md:border-r-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon2} alt="" />
                            </div>
                            <p>Node.js</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF] md:border-t-0 md:border-r-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon3} alt="" />
                            </div>
                            <p>React.js</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 p-8 md:p-12  xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon4} alt="" />
                            </div>
                            <p>Flutter</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-l-0 md:border-r-0 md:border-t-0 lg:border-l  p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon5} alt="" />
                            </div>
                            <p>Laravel</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0  p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon6} alt="" />
                            </div>
                            <p>MongoDB</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 lg:border-l-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon7} alt="" />
                            </div>
                            <p>MySQL</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0  p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon8} alt="" />
                            </div>
                            <p>AWS</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 md:border-l-0 lg:border-l p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon9} alt="" />
                            </div>
                            <p>GitHub</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon10} alt="" />
                            </div>
                            <p>Figma</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon11} alt="" />
                            </div>
                            <p>Django</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon12} alt="" />
                            </div>
                            <p>Expert.js</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 md:border-l-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon13} alt="" />
                            </div>
                            <p>Angular</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon14} alt="" />
                            </div>
                            <p>Python</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon15} alt="" />
                            </div>
                            <p>.Net.core</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon16} alt="" />
                            </div>
                            <p>Java</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 md:border-l-0 lg:border-l p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon17} alt="" />
                            </div>
                            <p>Kotlin</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 lg:border-b p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon18} alt="" />
                            </div>
                            <p>Kotlin</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 lg:border-l-0 lg:border-b-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon19} alt="" />
                            </div>
                            <p>React.Native</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-t-0 md:border-r-0 lg:border-b-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon20} alt="" />
                            </div>
                            <p>PostgreSQL</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF]  md:border-l-0 md:border-t-0 md:border-b-0 lg:border-l p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon21} alt="" />
                            </div>
                            <p>Docker</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF] md:border-l-0 md:border-t-0 md:border-b-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon22} alt="" />
                            </div>
                            <p>Adobe</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF] md:border-l-0 md:border-t-0 md:border-b-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon23} alt="" />
                            </div>
                            <p>Next.js</p>
                        </motion.div>

                        <motion.div
                            variants={childLogo}
                            className="border border-[#CCCCFF] md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-0 p-8 md:p-12 xl:p-17 flex flex-col justify-center items-center gap-3">
                            <div>
                                <img src={icon24} alt="" />
                            </div>
                            <p>Vue.js</p>
                        </motion.div>

                    </motion.div>


                </div>
            </section >
        </>
    )
}

export default Technologies



