import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import drop1 from "../About/Img/drop1.png"
import drop2 from "../About/Img/drop2.png"
import drop3 from "../About/Img/drop3.png"
import drop4 from "../About/Img/drop4.png"
import { motion } from 'framer-motion';

function Abdropdown() {

    const [open, setOpen] = useState(0); // default first open

    const Faqs = [
        {
            ques: "Faster Time to Market",
            ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            color: "bg-[#FBF5D9]",
            image: drop1
        },
        {
            ques: "Better Performance",
            ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            color: "bg-[#EDEDFF]",
            image: drop2
        },
        {
            ques: "High Scalability",
            ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            color: "bg-[#DBEBFF]",
            image: drop3
        },
        {
            ques: "Secure System",
            ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            color: "bg-[#D8F5FF]",
            image: drop4
        },
    ];

    const togglebtn = (index) => {
        setOpen(index);
    }

    return (
        <section className='px-4 overflow-hidden'>
            <div className='max-w-7xl mx-auto py-10'>

                {/*  Main Layout */}
                <div className='flex flex-col md:flex-row gap-10 md:gap-5'>

                    {/* LEFT - FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, }}
                        whileInView={{ opacity: 1, x: 0, }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='md:w-1/2'>
                        {Faqs.map((item, index) => (
                            <div key={index} className='mb-4'>

                                {/* Question */}
                                <div
                                    onClick={() => togglebtn(index)}
                                    className={`${item.color} py-5 md:py-4 lg:py-8.5 px-5 cursor-pointer font-semibold flex justify-between items-center text-2xl`}
                                >
                                    {item.ques}

                                    {open === index ? (
                                        <IoMdArrowDropup size={24} />
                                    ) : (
                                        <IoMdArrowDropdown size={24} />
                                    )}
                                </div>

                                {/* Answer */}
                                {open === index && (
                                    <div className={`${item.color} pt-2 pb-4 px-5 text-[#555]`}>
                                        {item.ans}
                                    </div>
                                )}

                            </div>
                        ))}
                    </motion.div>

                    {/* RIGHT - IMAGE */}
                    <div className='md:w-1/2 flex items-center justify-center'>
                        <motion.img
                            initial={{ opacity: 0, x: -100, }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            src={Faqs[open]?.image}
                            alt="faq"
                            className={`w-full h-full px-5 pt-10 object-cover ${Faqs[open]?.color}`}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Abdropdown;
