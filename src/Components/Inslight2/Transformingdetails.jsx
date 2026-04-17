import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";

function Transformingdetails() {

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

    const performancePoints = [
        {
            title: "1. Enhances User Experience",
            desc: "Faster loading speeds create a smooth and enjoyable experience, keeping users engaged and reducing frustration.",
            points: [
                "Quick page transitions improve usability",
                "Reduces waiting time for users",
                "Creates seamless navigation flow",
                "Improves overall satisfaction"
            ]
        },
        {
            title: "2. Reduces Bounce Rates",
            desc: "Slow websites drive users away. Faster performance ensures visitors stay longer and explore more pages.",
            points: [
                "Keeps users engaged on first visit",
                "Minimizes early exits",
                "Encourages deeper browsing",
                "Improves session duration"
            ]
        },
        {
            title: "3. Boosts Conversion Rates",
            desc: "Speed plays a crucial role in decision-making. Faster load times lead to higher conversions and increased sales.",
            points: [
                "Faster checkout experiences",
                "Reduced cart abandonment",
                "Improved form submissions",
                "Better CTA interaction rates"
            ]
        },
        {
            title: "4. Improves SEO Performance",
            desc: "Search engines prioritize fast-loading websites, making speed a critical factor for better rankings.",
            points: [
                "Higher search engine rankings",
                "Better visibility on Google",
                "Improved mobile performance scores",
                "Enhanced crawl efficiency"
            ]
        },
        {
            title: "5. Enables Scalable Growth",
            desc: "Optimized performance ensures your platform can handle increasing traffic without compromising user experience.",
            points: [
                "Handles high traffic efficiently",
                "Supports business expansion",
                "Improves server performance",
                "Ensures consistent user experience at scale"
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
                    className="mb-8 text-3xl font-semibold sm:text-4xl md:text-6xl md:mb-10"
                >
                    Transforming Loading Speeds into Scalable Revenue Growth
                </motion.h1>

                {/* Intro */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl"
                >
                    In today’s fast-paced digital environment, users expect websites and applications to load instantly. Even a delay of a few seconds can lead to frustration, higher bounce rates, and lost opportunities.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mb-12"
                >
                    Optimizing loading speed is no longer just a technical improvement — it is a direct driver of revenue growth. Below are key ways faster performance translates into scalable business success.
                </motion.p>

                {/* POINTS */}
                <div className="space-y-10 md:space-y-14">
                    {performancePoints.map((item, index) => (
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
                    Investing in loading speed optimization is one of the most impactful ways to drive scalable revenue growth. Faster experiences not only improve user satisfaction but also directly influence conversions, retention, and long-term business success.
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

export default Transformingdetails
