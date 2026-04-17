import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";

function Gooduxdetails() {

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
                    Introduction
                </motion.h1>

                {/* Intro */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl"
                >
                    In today’s digital world, users have more choices than ever before. If your product is confusing, slow, or difficult to use, users will quickly leave and switch to competitors.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mb-12"
                >
                    UX design is not just about looks — it directly impacts business performance. Below are key ways good UX improves ROI with detailed breakdowns.
                </motion.p>

                {/* POINTS */}
                <div className="space-y-10 md:space-y-14">

                    {[
                        {
                            title: "1. Reduces User Friction",
                            desc: "A smooth user experience removes confusion and unnecessary steps, allowing users to complete tasks quickly and efficiently.",
                            points: [
                                "Simplifies navigation and structure",
                                "Reduces loading time and delays",
                                "Minimizes user errors",
                                "Improves accessibility for all users"
                            ]
                        },
                        {
                            title: "2. Increases Conversion Rates",
                            desc: "Good UX guides users toward desired actions like signing up or making a purchase.",
                            points: [
                                "Clear call-to-action (CTA) buttons",
                                "Optimized user journey",
                                "Better form design",
                                "Reduced drop-off rates"
                            ]
                        },
                        {
                            title: "3. Builds Trust and Credibility",
                            desc: "A professional and consistent design builds trust and improves brand perception.",
                            points: [
                                "Clean and modern interface design",
                                "Consistent branding and visuals",
                                "Reliable performance",
                                "Transparent information structure"
                            ]
                        },
                        {
                            title: "4. Improves Customer Retention",
                            desc: "Great UX encourages users to return and continue using your product.",
                            points: [
                                "Easy-to-use interface",
                                "Personalized experience",
                                "Consistent performance",
                                "Engaging interactions"
                            ]
                        },
                        {
                            title: "5. Boosts Business ROI",
                            desc: "UX improvements directly contribute to higher revenue and growth.",
                            points: [
                                "Higher conversion rates",
                                "Lower acquisition cost",
                                "Increased customer lifetime value",
                                "Better brand loyalty"
                            ]
                        }
                    ].map((item, index) => (

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
                    Investing in UX is one of the smartest decisions a business can make. It improves user satisfaction and drives measurable long-term growth.
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

export default Gooduxdetails
