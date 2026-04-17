import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";

function Buildingdetails() {

    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        const from = location.state?.from;

        if (from === "inslight-page") {
            navigate("/inslightcards", {
                state: { from: "inslight-page" },
            });
        } else {
            navigate(-1);
        }
    };



    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    const brandPoints = [
        {
            title: "1. Strategic Color Psychology",
            desc: "Colors evoke emotions and set the tone for your brand. A high-performance visual identity uses color strategically to build professional authority.",
            points: [
                "Establishing trust with professional palettes",
                "Ensuring brand recall through consistent usage",
                "Creating contrast for high-impact messaging",
                "Meeting accessibility standards for all users"
            ]
        },
        {
            title: "2. Precision Typography and Readability",
            desc: "The way your text looks speaks as loudly as what it says. Professional typography ensures your brand feels authoritative and easy to consume.",
            points: [
                "Using font scales for clear information hierarchy",
                "Ensuring readability across all screen sizes",
                "Selecting typefaces that reflect brand personality",
                "Optimizing line height and spacing for comfort"
            ]
        },
        {
            title: "3. Consistent Visual Language",
            desc: "Consistency is the foundation of authority. A unified system of icons, imagery, and patterns makes your brand instantly recognizable.",
            points: [
                "Unified iconography and custom illustrations",
                "Standardized image styles and filters",
                "Consistent spacing and layout systems",
                "Cohesive cross-platform design presence"
            ]
        },
        {
            title: "4. Impactful Layout and White Space",
            desc: "A cluttered design looks amateur. Using white space effectively shows confidence and allows your key message to breathe and stand out.",
            points: [
                "Reducing cognitive load for better focus",
                "Directing user attention to key conversion points",
                "Creating a premium, modern aesthetic",
                "Improving scannability of complex information"
            ]
        },
        {
            title: "5. High-Resolution Performance",
            desc: "Visual identity isn't just about art; it's about tech. Fast-loading, crisp visuals ensure your brand feels modern and technically competent.",
            points: [
                "Optimized SVG and WebP image formats",
                "Retina-ready graphics for sharp displays",
                "Adaptive assets for varying connection speeds",
                "Seamless integration with fast-loading animations"
            ]
        }
    ];

    return (
        <section className="my-16 md:my-24">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">

                {/* Heading */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-8 text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl md:mb-10"
                >
                    Building Brand Authority with High-Performance Visual Identity
                </motion.h1>

                {/* Intro */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl"
                >
                    In a crowded market, your visual identity is the first thing users judge. It’s not just about looking "pretty" — it’s about looking capable, professional, and reliable.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mb-12"
                >
                    A high-performance visual system works silently to prove your authority, ensuring that every interaction a user has with your brand reinforces trust and excellence.
                </motion.p>

                {/* POINTS */}
                <div className="space-y-10 md:space-y-14">
                    {brandPoints.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h2 className="mb-3 text-xl font-semibold sm:text-2xl md:text-3xl">
                                {item.title}
                            </h2>

                            <p className="mb-4 text-base leading-relaxed text-gray-700 sm:text-lg">
                                {item.desc}
                            </p>

                            <ul className="pl-5 space-y-2 text-base text-gray-800 list-disc md:pl-6 sm:text-lg">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Closing */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-12 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mt-16"
                >
                    Strong visual identity is the bridge between a good product and a great brand. When your design is intentional and high-performing, authority follows naturally.
                </motion.p>

            </div>


            {/* Back Button */}
            <div className="flex items-center justify-center mt-16 sm:mt-24">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={goBack}
                    className="px-6 py-3 font-medium text-white transition bg-black shadow-md rounded-xl hover:bg-gray-800"
                >
                    ← Back
                </motion.button>
            </div>

        </section>
    )
}

export default Buildingdetails;
