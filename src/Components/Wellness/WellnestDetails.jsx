import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosArrowRoundBack, IoMdAnalytics, IoMdLeaf } from "react-icons/io";

const projects = {
    Wellnest: {
        title: "Wellnest",
    }
};

function WellnestDetails() {

    const navigate = useNavigate();
    const { id } = useParams();

    const data = projects[id] || projects["Wellnest"];

    return (

        <div className="mx-auto font-sans max-w-7xl ">

            {/* Hero Section */}
            <section className="px-6 py-12 md:px-20">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12">

                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="mb-6 text-6xl font-light leading-tight md:text-8xl">
                                Wellnest — <br />
                                <span className="italic text-[#FFCD00]">
                                    Health Companion
                                </span>
                            </h1>

                            <div className="flex gap-10 mt-10">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase">Impact</p>
                                    <p className="text-xl font-medium text-[#FFCD00]">
                                        2M+ Users
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400 uppercase">Focus</p>
                                    <p className="text-xl font-medium">
                                        Clean UX
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div className="relative lg:col-span-5">
                        <div className="bg-[#D8F5FF] aspect-4/5 w-full flex items-center justify-center rounded-2xl shadow-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                                className="object-cover w-full h-full"
                                alt="Wellnest"
                            />
                        </div>

                        <div className="absolute hidden p-5 bg-[#EDEDFF] rounded-xl shadow-lg -bottom-6 -left-6 md:block">
                            <IoMdLeaf className="text-[#FFCD00] text-3xl mb-2" />
                            <p className="text-sm font-bold">
                                Habit Tracking
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ✨ NEW: Feature Cards */}
            <section className="px-6 py-16 md:px-20">
                <div className="grid gap-6 md:grid-cols-3">

                    <div className="p-6 bg-[#DBEBFF] rounded-2xl shadow-md">
                        <h3 className="mb-2 text-lg font-semibold">Smart Tracking</h3>
                        <p className="text-sm text-gray-600">
                            Track daily habits with minimal effort and maximum clarity.
                        </p>
                    </div>

                    <div className="p-6 bg-[#D8F5FF] rounded-2xl shadow-md">
                        <h3 className="mb-2 text-lg font-semibold">Insights</h3>
                        <p className="text-sm text-gray-600">
                            AI-based insights to improve your health journey.
                        </p>
                    </div>

                    <div className="p-6 bg-[#EDEDFF] rounded-2xl shadow-md">
                        <h3 className="mb-2 text-lg font-semibold">Motivation</h3>
                        <p className="text-sm text-gray-600">
                            Personalized nudges to keep you consistent.
                        </p>
                    </div>

                </div>
            </section>

            {/* Deep Dive */}
            <section className="bg-[#EDEDFF] text-black py-20 px-6 md:px-20">
                <div className="max-w-4xl mx-auto">

                    <h2 className="mb-6 text-sm tracking-widest text-gray-500 uppercase">
                        The Mission
                    </h2>

                    <p className="text-3xl font-light leading-relaxed">
                        A health app focused on{" "}
                        <span className="text-[#FFCD00]">
                            behavior-driven design
                        </span>{" "}
                        to improve everyday wellness.
                    </p>

                </div>
            </section>

            {/* ✨ NEW: Stats Strip */}
            <section className="px-6 py-16 md:px-20">
                <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">

                    <div className="p-6 bg-[#DBEBFF] rounded-xl">
                        <h3 className="text-2xl font-bold">2M+</h3>
                        <p className="text-sm text-gray-500">Users</p>
                    </div>

                    <div className="p-6 bg-[#D8F5FF] rounded-xl">
                        <h3 className="text-2xl font-bold">85%</h3>
                        <p className="text-sm text-gray-500">Retention</p>
                    </div>

                    <div className="p-6 bg-[#EDEDFF] rounded-xl">
                        <h3 className="text-2xl font-bold">4.8★</h3>
                        <p className="text-sm text-gray-500">Rating</p>
                    </div>

                    <div className="p-6 bg-[#DBEBFF] rounded-xl">
                        <h3 className="text-2xl font-bold">30%</h3>
                        <p className="text-sm text-gray-500">Growth</p>
                    </div>

                </div>
            </section>

            {/* Images */}
            <section className="px-6 py-20 md:px-20">
                <div className="flex flex-col gap-8 md:flex-row">

                    <div className="bg-[#DBEBFF] flex-1 rounded-2xl overflow-hidden group">
                        <img
                            src="https://images.pexels.com/photos/6336/light-man-hand-pen.jpg"
                            className="object-cover w-full h-full transition duration-500 grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <div className="bg-[#DBEBFF] flex-1 rounded-2xl overflow-hidden group">
                        <img
                            src="https://images.pexels.com/photos/6253568/pexels-photo-6253568.jpeg"
                            className="object-cover w-full h-full transition duration-500 grayscale group-hover:grayscale-0"
                        />
                    </div>

                  

                </div>


            </section>

            {/* Nav */}
            <nav className="flex justify-center p-8 backdrop-blur-md">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-sm font-bold uppercase"
                >
                    <IoIosArrowRoundBack size={24} />
                    Back
                </button>
            </nav>

        </div>
    );
}

export default WellnestDetails;
