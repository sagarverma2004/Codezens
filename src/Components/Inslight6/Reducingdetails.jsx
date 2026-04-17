import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";

function Reducingdetails() {

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

    const selfServicePoints = [
        {
            title: "1. Intuitive Onboarding and Walkthroughs",
            desc: "By guiding users through the product from day one, you reduce the need for 'how-to' support tickets and manual training.",
            points: [
                "Interactive step-by-step product tours",
                "Contextual tooltips for complex features",
                "Progress tracking for setup completion",
                "Reduced initial learning curve"
            ]
        },
        {
            title: "2. Intelligent Knowledge Bases & FAQs",
            desc: "A well-designed help center allows users to find answers instantly, shifting the burden away from live support agents.",
            points: [
                "Powerful search with natural language processing",
                "Categorized articles with visual aids",
                "Suggested solutions based on user behavior",
                "Regularly updated content driven by user data"
            ]
        },
        {
            title: "3. Automated Account & Billing Management",
            desc: "Giving users the power to manage their own subscriptions, profiles, and payments eliminates repetitive administrative tasks.",
            points: [
                "One-click plan upgrades and downgrades",
                "Self-service password and security resets",
                "Automated invoice and receipt generation",
                "Clear transparency in billing history"
            ]
        },
        {
            title: "4. Smart Troubleshooting & Diagnostics",
            desc: "Instead of calling support, users can use built-in diagnostic tools to identify and fix issues on their own.",
            points: [
                "Real-time error messaging with clear solutions",
                "Automated system health dashboards",
                "Interactive troubleshooting wizards",
                "Direct links to specific help resources"
            ]
        },
        {
            title: "5. Feedback Loops and Community Support",
            desc: "Building a self-sustaining community or forum allows experienced users to help newcomers, creating a low-cost support ecosystem.",
            points: [
                "Peer-to-peer discussion forums",
                "Community-driven Q&A sections",
                "Public product roadmaps and updates",
                "Gamified contributions for helpful users"
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
                    Reducing Operational Costs via Self-Service User Experience
                </motion.h1>

                {/* Intro */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl"
                >
                    Every time a user has to contact support, it costs the business time and money. A smart self-service UX empowers users to solve their own problems, leading to higher satisfaction and massive cost savings.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mb-12"
                >
                    By investing in intuitive design and automated help systems, businesses can scale their user base without linearly increasing their support staff or operational overhead.
                </motion.p>

                {/* POINTS */}
                <div className="space-y-10 md:space-y-14">
                    {selfServicePoints.map((item, index) => (
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
                    Efficiency isn't just about internal processes; it's about how users interact with your system. Self-service UX is the ultimate tool for creating a lean, profitable, and user-centric business model.
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

export default Reducingdetails
