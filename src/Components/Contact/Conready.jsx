import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Conready() {
    return (
        <section className="px-4 py-16 md:py-28 sm:px-6">
            <div className="max-w-6xl mx-auto bg-[#E9E3DE] rounded-2xl">

                <div className="px-6 py-12 sm:px-10 md:px-16 lg:px-24 md:py-16">

                    {/* Heading */}
                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-4 text-2xl text-center sm:text-3xl md:text-5xl"
                    >
                        Ready to get started
                    </motion.p>

                    <p className="max-w-xl mx-auto text-center text-[#555555] text-sm sm:text-base mb-10">
                        Tell us about your idea - we’ll help you turn it into a powerful digital experience.
                        You can drop us an email or book a call anytime.
                    </p>

                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 md:flex-row"
                    >

                        {/* Email */}
                        <div className="flex items-center md:flex-col md:items-start gap-4 px-6 py-4 bg-white rounded-xl w-full text-[#555555] hover:shadow-md transition">
                            <MdOutlineMarkEmailUnread className="text-2xl text-[#FFCD00]" />
                            <p className="text-sm break-all sm:text-base">
                                info@codezens.com
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center md:flex-col md:items-start gap-4 px-6 py-4 bg-white rounded-xl w-full text-[#555555] hover:shadow-md transition">
                            <FaPhoneAlt className="text-xl text-[#FFCD00]" />
                            <p className="text-sm sm:text-base">
                                +91 8516012341
                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Conready;
