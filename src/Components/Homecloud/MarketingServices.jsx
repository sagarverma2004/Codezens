import { FiTarget, FiTrendingUp, FiSearch, FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

function MarketingServices() {

    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        const from = location.state?.from;

        if (from === "home-services") {
            navigate("/", { state: { from: "home-services" } });
        } else if (from === "services-page") {
            navigate("/service", { state: { from: "services-page" } });
        } else {
            navigate("/");
        }
    };

    const services = [
        {
            title: "PPC Campaigns (ROI Focused)",
            icon: <FiTarget className="text-[#FF2A6D]" />,
            desc: "Instant traffic and leads that convert. We optimize for maximum return on ad spend.",
            features: ["Google Ads & Bing Ads", "Retargeting Campaigns", "Conversion Tracking", "Ad Copywriting"]
        },
        {
            title: "Social Media Growth",
            icon: <FiTrendingUp className="text-[#9D14E6]" />,
            desc: "Building communities, not just getting likes. Strategic content to amplify brand loyalty.",
            features: ["Meta (FB/Insta) Strategy", "LinkedIn B2B", "Influencer Collaboration", "Content Calendar Management"]
        },
        {
            title: "Content Marketing & SEO",
            icon: <FiSearch className="text-[#FF6A00]" />,
            desc: "Dominating search results. Creating highly authoritative content that drives organic users.",
            features: ["On-Page & Technical SEO", "Keyword Research", "High-Quality Blog Articles", "Link Building Strategy"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const card = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-16 bg-white md:py-24">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="px-4 mx-auto mb-12 text-center max-w-7xl sm:px-6 md:mb-16"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
                    Turning Traffic into
                    <span className="block text-transparent bg-clip-text bg-lnear-to-r from-[#FF2A6D] to-[#FF6A00]">
                        Measurable Results
                    </span>
                </h2>

                <p className="text-[#555] mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto">
                    From visibility to conversion, our strategic marketing engine covers the entire user journey.
                </p>
            </motion.div>

            {/* Cards */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10 sm:px-6"
            >
                {services.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={card}
                        whileHover={{ y: -8, scale: 1.03 }}
                        className="p-6 sm:p-8 md:p-10 border border-gray-100 rounded-3xl bg-[#FFF9FA] hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                    >
                        {/* Icon */}
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            className="inline-block mb-4 text-4xl sm:text-5xl md:text-6xl md:mb-6"
                        >
                            {item.icon}
                        </motion.div>

                        {/* Title */}
                        <h3 className="mb-3 text-xl font-bold sm:text-2xl md:mb-4">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-4 text-sm font-light leading-relaxed text-gray-600 md:mb-6 sm:text-base">
                            {item.desc}
                        </p>

                        {/* Features */}
                        <ul className="pt-4 space-y-2 text-left border-t border-pink-100 md:space-y-3 md:pt-6">
                            {item.features.map((feat, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-xs italic font-medium text-gray-700 sm:text-sm"
                                >
                                    <FiCheck className="text-[#9D14E6] w-4 h-4" />
                                    {feat}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='flex items-center justify-center mt-16 md:mt-24'
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goBack}
                    className="px-5 md:px-6 py-2.5 md:py-3 rounded-xl bg-black text-white text-sm md:text-base font-medium hover:bg-gray-800 transition shadow-md"
                >
                    ← Back
                </motion.button>
            </motion.div>

        </section>
    );
}

export default MarketingServices;
