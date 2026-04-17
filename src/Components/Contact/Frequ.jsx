import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";


function Frequ() {

    const [open, setOpen] = useState(false)

    const Faq = [
        {
            ques: "How soon will I get a response after submitting the form?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus incidunt quidem corrupti laborum provident eos delectus et nisi! Fuga voluptate praesentium placeat. Quidem labore ipsum eaque architecto veniam quia hic?"
        },
        {
            ques: "Do you work with startups or small businesses?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus incidunt quidem corrupti laborum provident eos delectus et nisi! Fuga voluptate praesentium placeat. Quidem labore ipsum eaque architecto veniam quia hic?"
        },
        {
            ques: "How do you estimate project cost and timeline?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus incidunt quidem corrupti laborum provident eos delectus et nisi! Fuga voluptate praesentium placeat. Quidem labore ipsum eaque architecto veniam quia hic?"
        },
        {
            ques: "Do you offer support after the project is completed?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus incidunt quidem corrupti laborum provident eos delectus et nisi! Fuga voluptate praesentium placeat. Quidem labore ipsum eaque architecto veniam quia hic?"
        },
        {
            ques: "How soon will I get a response after submitting the form?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus incidunt quidem corrupti laborum provident eos delectus et nisi! Fuga voluptate praesentium placeat. Quidem labore ipsum eaque architecto veniam quia hic?"
        },
        {
            ques: "How soon will I get a response after submitting the form?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus incidunt quidem corrupti laborum provident eos delectus et nisi! Fuga voluptate praesentium placeat. Quidem labore ipsum eaque architecto veniam quia hic?"
        },

    ];

    const toggleFaq = (index) => {
        setOpen(open === index ? null : index)
    }

    return (
        <>
            <section className="py-10 px-4">
                <div className="max-w-7xl mx-auto">

                    <div className="py-10 text-center">
                        <h1 className="text-2xl md:text-6xl pb-5">
                            Frequently Asked Question
                        </h1>

                        <p className="text-[#555555] font-light tracking-wider">
                            Answers to common questions about our services, timelines, and process.
                        </p>
                    </div>

                    {Faq.map((Faq, index) => (
                        <div key={index} className="my-3">
                            <div
                                onClick={() => toggleFaq(index)}
                                className="flex justify-between items-center text-md md:text-xl bg-[#E9E3DE] py-6 px-10"
                            >
                                {Faq.ques}
                                <MdArrowDropDown className={`text-3xl transition-transform
                                    ${open === index ? "rotate-180" : ""}`} />
                            </div>

                            {open === index && (
                                <div className=" text-sm md:text-md bg-[#E9E3DE] text-[#555555] py-4 px-10">
                                    {Faq.ans}
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Frequ;
