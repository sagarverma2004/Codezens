import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";

function Optimizingdetails() {

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

    const checkoutPoints = [
        {
            title: "1. Enforcing Guest Checkout Options",
            desc: "Forcing users to create an account is one of the biggest reasons for abandonment. Offering a guest checkout removes the initial barrier to purchase.",
            points: [
                "Instant 'Buy as Guest' functionality",
                "Option to save details after the purchase",
                "Social login integrations (Google, Apple)",
                "Minimalist entry forms for faster access"
            ]
        },
        {
            title: "2. Visual Progress Indicators",
            desc: "Users need to know how long the process will take. A clear progress bar reduces anxiety and helps manage expectations during multi-step checkouts.",
            points: [
                "Numbered steps (Shipping > Payment > Review)",
                "Visual cues for completed sections",
                "Breadcrumb-style navigation within the flow",
                "Estimated time-to-complete indicators"
            ]
        },
        {
            title: "3. Transparency in Costs and Shipping",
            desc: "Hidden fees at the final step are conversion killers. Displaying all costs—including taxes and shipping—upfront builds immediate trust.",
            points: [
                "Real-time shipping cost calculators",
                "Breakdown of taxes and handling fees",
                "Estimated delivery dates early in the process",
                "No-surprise pricing architecture"
            ]
        },
        {
            title: "4. Trust Signals and Security Assurance",
            desc: "Security is a major concern when handling credit card data. Highlighting trust badges and SSL certificates at key points reassures the user.",
            points: [
                "Visible SSL and payment security badges",
                "Encapsulated fields for credit card data",
                "Verified customer reviews near the 'Pay' button",
                "Clear links to refund and privacy policies"
            ]
        },
        {
            title: "5. Mobile-Optimized One-Click Payments",
            desc: "Typing card details on a mobile screen is high-friction. Integrating modern payment methods allows users to checkout in seconds.",
            points: [
                "One-click payment via UPI, Apple Pay, or GPay",
                "Auto-fill support for address and contact info",
                "Smart keyboard triggers for numeric fields",
                "Saved payment methods for returning customers"
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
                    Optimizing Checkout Workflows to Eliminate Cart Abandonment
                </motion.h1>

                {/* Intro */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl"
                >
                    The checkout page is where the most critical business decisions happen. Even a tiny bit of friction here can result in thousands of dollars in lost revenue.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mb-12"
                >
                    By streamlining the workflow and addressing user concerns about security and speed, we can transform abandoned carts into successful conversions.
                </motion.p>

                {/* POINTS */}
                <div className="space-y-10 md:space-y-14">
                    {checkoutPoints.map((item, index) => (
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
                    A frictionless checkout is the ultimate goal of e-commerce UX. When you respect the user's time and data, they reward you with their business and loyalty.
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

export default Optimizingdetails
