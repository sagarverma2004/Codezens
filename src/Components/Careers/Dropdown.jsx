import { BsArrowDown } from "react-icons/bs";
import { useState } from "react";
import careerdropdownimg from "./img/careerdropdownimg.png"
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

function Dropdown() {
    const [openIndex, setOpenIndex] = useState(null);
    const faq = [
        {
            img: careerdropdownimg,
            heading: "UI/UX Designer",
            date: "16 Nov. 2025",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            h1: "Skills",
            paragraph: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
            h2: "Qualifications",
            list: "Lorem Ipsum is simply dummy text ",
            h3: "Responsibilities",
            lists: "Lorem Ipsum is simply dummy text ",
        },
        {
            img: careerdropdownimg,
            heading: "UI/UX Designer",
            date: "16 Nov. 2025",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            h1: "Skills",
            paragraph: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
            h2: "Qualifications",
            list: "Lorem Ipsum is simply dummy text ",
            h3: "Responsibilities",
            lists: "Lorem Ipsum is simply dummy text ",
        },
        {
            img: careerdropdownimg,
            heading: "UI/UX Designer",
            date: "16 Nov. 2025",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            h1: "Skills",
            paragraph: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
            h2: "Qualifications",
            list: "Lorem Ipsum is simply dummy text ",
            h3: "Responsibilities",
            lists: "Lorem Ipsum is simply dummy text ",
        },
        {
            img: careerdropdownimg,
            heading: "UI/UX Designer",
            date: "16 Nov. 2025",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            h1: "Skills",
            paragraph: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
            h2: "Qualifications",
            list: "Lorem Ipsum is simply dummy text ",
            h3: "Responsibilities",
            lists: "Lorem Ipsum is simply dummy text ",
        },
        {
            img: careerdropdownimg,
            heading: "UI/UX Designer",
            date: "16 Nov. 2025",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            h1: "Skills",
            paragraph: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
            h2: "Qualifications",
            list: "Lorem Ipsum is simply dummy text ",
            h3: "Responsibilities",
            lists: "Lorem Ipsum is simply dummy text ",
        },
        // ... (other items)
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const cardParent = {
        hidden: {},
        show: { transition: { staggerChildren: 0.5, delayChildren: 0.2 } }
    }

    const cardChild = {
        hidden: { opacity: 0, y: 100, },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, } }

    }

    return (
        <>
            <section className="px-4 py-10">
                <div className="mx-auto max-w-7xl">
                    {/* Header Section */}
                    <div className="flex flex-col items-center justify-between gap-6 mb-10 text-center md:flex-row md:items-start md:text-left">
                        <div className="md:w-1/2">
                            <motion.h1
                                initial={{ opacity: 0, x: -50, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-4xl font-bold md:text-6xl">
                                Career
                            </motion.h1>
                        </div>
                        <div className="font-light md:w-1/2">
                            <motion.p
                                initial={{ opacity: 0, x: 50, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-lg md:text-xl text-[#555555] pb-5">
                                At CodeZens, we believe in curiosity, creativity, and collaboration. We work on exciting digital products, solve real problems, and help each other grow.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: 50, }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="flex items-center justify-center gap-2 text-lg md:text-2xl md:justify-start">
                                Explore our open roles below.
                                <BsArrowDown className="bg-[#FFCD00] p-1 text-3xl" />
                            </motion.p>
                        </div>
                    </div>

                    {/* Accordion Section */}
                    <div className="bg-[#E9E3DE] p-4 md:p-10 lg:p-20">
                        <motion.div
                            variants={cardParent}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="space-y-6">
                            {faq.map((item, index) => (
                                <motion.div
                                    variants={cardChild}
                                    key={index} className="p-6 bg-white shadow-sm md:p-8">
                                    {/* Clickable Header */}
                                    <div
                                        onClick={() => toggle(index)}
                                        className="flex flex-col items-start gap-6 cursor-pointer md:flex-row"
                                    >
                                        <div className="w-20 h-20 mx-auto md:mx-0">
                                            <img src={item.img} alt="icon" className="object-contain w-full h-full" />
                                        </div>

                                        <div className="flex-1 w-full text-left">
                                            <div className="flex items-center justify-between">
                                                <h1 className="text-xl font-semibold md:text-3xl">
                                                    {item.heading}
                                                </h1>
                                                <MdArrowDropDown className={`text-3xl transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                                            </div>
                                            <h2 className="text-[#555555] text-sm mb-2">
                                                {item.date}
                                            </h2>
                                            <p className="text-sm font-light text-[#555555] mb-4">
                                                {item.para}
                                            </p>
                                            <button className="flex items-center gap-2 px-6 py-2 bg-[#FFCD00] font-medium hover:bg-yellow-400 transition text-sm">
                                                Apply Now
                                                <IoIosArrowRoundForward className="text-2xl" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Expandable Content */}
                                    {openIndex === index && (
                                        <div className="pt-8 mt-8 border-t md:ml-28 animate-fadeIn">
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="mb-3 text-xl font-semibold md:text-2xl">{item.h1}</h3>
                                                    <p className="text-sm md:text-base font-light text-[#555555] leading-relaxed">
                                                        {item.paragraph}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="mb-3 text-xl font-semibold md:text-2xl">{item.h2}</h3>
                                                    <ul className="list-disc pl-5 space-y-2 text-[#555555] font-light">
                                                        <li>{item.list}</li>
                                                        <li>{item.list}</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="mb-3 text-xl font-semibold md:text-2xl">{item.h3}</h3>
                                                    <ul className="list-disc pl-5 space-y-2 text-[#555555] font-light">
                                                        <li>{item.lists}</li>
                                                        <li>{item.lists}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dropdown;
