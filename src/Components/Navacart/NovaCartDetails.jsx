import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosArrowRoundBack, IoMdCart, IoIosRocket } from "react-icons/io";
import { useEffect } from 'react';

function NovaCartDetails() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mx-auto font-sans max-w-7xl">

            {/* Hero Section */}
            <section className="px-6 py-16 md:px-20">
                <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-12">

                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1 className="mb-8 text-6xl font-light leading-tight md:text-8xl">
                                NovaCart — <br />
                                <span className="italic text-[#D97706]">Shopping Reimagined</span>
                            </h1>

                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div className="border-l-2 border-[#D97706] pl-6">
                                    <p className="text-xs text-gray-400 uppercase">Conversion</p>
                                    <p className="text-3xl font-bold">+42%</p>
                                </div>
                                <div className="border-l-2 border-[#D97706] pl-6">
                                    <p className="text-xs text-gray-400 uppercase">Rating</p>
                                    <p className="text-3xl font-bold">4.9 ⭐️</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6"
                    >
                        <div className="bg-[#FFF9F0] aspect-video w-full border border-gray-100 shadow-2xl relative overflow-hidden group rounded-2xl">

                            <img
                                src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop"
                                className="object-cover w-full h-full transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                alt="NovaCart Platform"
                            />

                            <div className="absolute hidden p-5 text-white bg-black -top-10 -right-5 md:block">
                                <p className="text-xs uppercase tracking-[0.2em] mb-1">Tech Stack</p>
                                <p className="font-bold">Next.js + Stripe</p>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Strategy Section */}
            <section className="bg-[#111111] text-white py-24 px-6 md:px-20">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col gap-20 md:flex-row">

                        <div className="md:w-1/3">
                            <h2 className="text-sm uppercase tracking-[0.4em] text-[#D97706] font-bold mb-6">
                                The Challenge
                            </h2>
                            <p className="text-gray-400">
                                NovaCart was losing users at checkout due to slow load times and complex UX.
                            </p>
                        </div>

                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-light md:text-5xl">
                                We focused on <span className="text-[#D97706]">speed, simplicity,</span> and mobile-first design.
                            </h2>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="px-6 py-24 md:px-20">
                <div className="grid grid-cols-1 bg-gray-100 md:grid-cols-3 gap-px">

                    <div className="bg-white p-12 group hover:bg-[#FFF9F0] hover:-translate-y-2 transition-all duration-500">
                        <IoIosRocket size={40} className="mb-6 text-[#D97706]" />
                        <h4 className="mb-4 text-xl font-bold">Speed Optimization</h4>
                        <p className="text-sm text-gray-500">
                            Ultra-fast loading for better product discovery.
                        </p>
                    </div>

                    <div className="bg-white p-12 group hover:bg-[#FFF9F0] hover:-translate-y-2 transition-all duration-500">
                        <IoMdCart size={40} className="mb-6 text-[#D97706]" />
                        <h4 className="mb-4 text-xl font-bold">1-Click Checkout</h4>
                        <p className="text-sm text-gray-500">
                            Seamless checkout experience.
                        </p>
                    </div>

                    <div className="bg-white p-12 group hover:bg-[#FFF9F0] hover:-translate-y-2 transition-all duration-500">
                        <div className="flex items-center justify-center w-10 h-10 mb-6 text-white bg-black">M</div>
                        <h4 className="mb-4 text-xl font-bold">Mobile First</h4>
                        <p className="text-sm text-gray-500">
                            Designed for mobile users first.
                        </p>
                    </div>

                </div>
            </section>

            {/* Image Section */}
            <section className="px-6 pb-24 md:px-20">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="overflow-hidden h-125 group rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop"
                            className="object-cover w-full h-full transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                            alt="E-commerce UI"
                        />
                    </div>

                    <div className="flex items-center justify-center p-20 text-center bg-black rounded-2xl h-125">
                        <div>
                            <p className="mb-6 text-5xl italic text-white">
                                "The performance boost changed our business."
                            </p>
                            <span className="text-xs uppercase tracking-widest text-[#D97706]">
                                — NovaCart CEO
                            </span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Nav */}
            <nav className="flex justify-center p-8 bg-white/90 backdrop-blur-sm">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-sm font-bold uppercase group"
                >
                    <IoIosArrowRoundBack
                        size={24}
                        className="transition-transform group-hover:-translate-x-2"
                    />
                    Back
                </button>
            </nav>

        </div>
    );
}

export default NovaCartDetails;
