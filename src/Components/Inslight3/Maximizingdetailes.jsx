import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";    

function Maximizingdetails() {

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

    const navPoints = [
        {
            title: "1. Implementing Intuitive Information Architecture",
            desc: "Navigation should feel like second nature. By organizing content logically, we ensure users find what they need without thinking twice.",
            points: [
                "Hierarchical structure for easy scanning",
                "Clear and concise menu labeling",
                "Logical grouping of related services",
                "Predictable placement of navigation elements"
            ]
        },
        {
            title: "2. The Power of Sticky and Accessible Navigation",
            desc: "Reducing the effort to move between pages is key. Sticky headers and easy-to-reach mobile menus keep the journey continuous.",
            points: [
                "Persistent headers for instant access",
                "Thumb-friendly mobile navigation patterns",
                "Visible 'Back to Top' functionality",
                "Minimalistic design to reduce cognitive load"
            ]
        },
        {
            title: "3. Reducing Clicks to Conversion",
            desc: "Every extra click is an opportunity for a user to leave. Frictionless logic focuses on creating the shortest path to the goal.",
            points: [
                "Direct links to high-intent pages",
                "Elimination of redundant sub-menus",
                "Contextual navigation within page sections",
                "Streamlined checkout and signup flows"
            ]
        },
        {
            title: "4. Visual Cues and Feedback Loops",
            desc: "Navigation isn't just about links; it's about communication. Users should always know where they are and where they can go.",
            points: [
                "Active state indicators for current pages",
                "Hover effects that signify interactivity",
                "Breadcrumb trails for complex structures",
                "Clear progress indicators for multi-step tasks"
            ]
        },
        {
            title: "5. Search-First Navigation Logic",
            desc: "For content-heavy platforms, a robust search logic acts as a shortcut, bypassing traditional menus to deliver instant results.",
            points: [
                "Auto-suggest and predictive search features",
                "Filtered search results for precision",
                "Highly visible search bar placement",
                "Optimized 'No Results Found' recovery paths"
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
                    Maximizing Conversions through Frictionless Navigation Logic
                </motion.h1>

                {/* Intro */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl"
                >
                    Navigation is the backbone of user experience. If users struggle to find their way, they won't stay long enough to convert. Frictionless navigation removes the barriers between a user's intent and their final action.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mb-12"
                >
                    By applying logical flow and psychological triggers, we can guide users through a seamless journey that naturally leads to higher conversion rates and business growth.
                </motion.p>

                {/* POINTS */}
                <div className="space-y-10 md:space-y-14">
                    {navPoints.map((item, index) => (
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
                    A well-structured navigation system is an investment in your business's bottom line. When users can navigate effortlessly, trust increases, friction disappears, and conversions happen naturally.
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

export default Maximizingdetails;
