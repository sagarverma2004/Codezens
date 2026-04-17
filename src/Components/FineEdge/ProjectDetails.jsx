import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoIosArrowRoundBack, } from "react-icons/io";

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Smooth scroll effect for the header image
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    // Project Data (Isko aap separate file mein bhi rakh sakte hain)
    const projects = {
        finedge: {
            title: "FinEdge",
            subtitle: "Fintech Revolutionizing Payments",
            category: "Financial Technology",
            year: "2024",
            bgColor: "#EFF1FF",
            accentColor: "#4F46E5",
            description: "FinEdge is a high-performance digital payment ecosystem designed for modern enterprises. We re-engineered the entire transaction flow to ensure peak security and lighting-fast speed.",
            challenges: "Small businesses struggle with fragmented payment gateways and high processing latencies. The goal was to unify these into a single, intuitive dashboard.",
            results: ["70% reduction in processing time", "40% increase in user retention", "Bank-grade encryption implementation"],
            images: {
                hero: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
                mockup: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1374&auto=format&fit=crop"
            }
        }
    };

    const data = projects[id] || projects.finedge; // Fallback to finedge for demo

    return (
        <div className="bg-white min-h-screen font-sans text-[#1a1a1a]">

            {/* 2. Hero Section */}
            <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img src={data.images.hero} className="object-cover w-full h-full brightness-75" alt={data.title} />
                </motion.div>
                <div className="relative z-10 px-4 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white/80 uppercase tracking-[0.3em] text-sm mb-4"
                    >
                        {data.category}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl italic font-light text-white md:text-9xl"
                    >
                        {data.title}
                    </motion.h1>
                </div>
            </section>

            {/* 3. Overview Grid */}
            <section className="grid grid-cols-1 gap-12 px-6 py-24 mx-auto max-w-7xl md:grid-cols-12">
                <div className="md:col-span-8">
                    <h2 className="mb-8 text-3xl font-light leading-tight md:text-5xl">
                        Crafting a seamless experience for the <span className="italic font-normal">future of finance.</span>
                    </h2>
                    <p className="text-[#555] text-lg md:text-xl leading-relaxed max-w-2xl">
                        {data.description}
                    </p>
                </div>

                <div className="pl-8 space-y-8 border-l border-gray-100 md:col-span-4">
                    <div>
                        <h4 className="mb-2 text-xs tracking-widest text-gray-400 uppercase">Services</h4>
                        <p className="font-medium">UI/UX Design, Brand Identity, Web Development</p>
                    </div>
                    <div>
                        <h4 className="mb-2 text-xs tracking-widest text-gray-400 uppercase">Year</h4>
                        <p className="font-medium">{data.year}</p>
                    </div>
                </div>
            </section>

            {/* 4. Deep Detail Section */}
            <section className="bg-[#f9f9f9] py-24 px-6">
                <div className="grid items-center grid-cols-1 gap-20 mx-auto max-w-7xl md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl font-light mb-6 text-[#111]">The Challenge</h3>
                        <p className="mb-8 text-lg leading-relaxed text-gray-600">
                            {data.challenges}
                        </p>
                        <ul className="space-y-4">
                            {data.results.map((res, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                    <span className="text-sm font-semibold tracking-wider uppercase">{res}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img src={data.images.mockup} className="shadow-2xl rounded-2xl" alt="Mockup" />
                        <div className="absolute -bottom-6 -right-6 bg-[#FFCD00] p-8 hidden md:block">
                            <p className="text-4xl font-bold">70%</p>
                            <p className="text-xs tracking-tighter uppercase">Faster Growth</p>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* 1. Navigation */}
            <nav className="top-0 z-50 flex items-center justify-center w-full px-8 py-10 text-white  mix-blend-difference">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-1 px-5 overflow-hidden group"
                >
                    <IoIosArrowRoundBack size={30} className="transition-transform duration-300 group-hover:-translate-x-2" />
                    <span className="text-sm tracking-widest uppercase">Go Back</span>
                </button>
            </nav>
        </div>
    );
};

export default ProjectDetails;
