import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";

function Expandingdetails() {

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

    const inclusivePoints = [
        {
            title: "1. Designing for All Abilities",
            desc: "Engineering for accessibility means your product is usable by everyone, including people with visual, hearing, or motor impairments.",
            points: [
                "Full keyboard navigation support",
                "Screen reader friendly semantic HTML",
                "High-contrast color modes",
                "Scalable text without layout breaking"
            ]
        },
        {
            title: "2. Global Reach through Localization",
            desc: "Inclusive engineering goes beyond code; it adapts to cultures and languages, making your brand feel local anywhere in the world.",
            points: [
                "Multi-language support (i18n)",
                "Right-to-Left (RTL) layout compatibility",
                "Culturally relevant imagery and icons",
                "Regional date and currency formatting"
            ]
        },
        {
            title: "3. Performance for Low-Bandwidth Users",
            desc: "True inclusivity includes users on slower connections or older devices. Lightweight engineering ensures no one is left behind.",
            points: [
                "Aggressive code-splitting and lazy loading",
                "Minimal JavaScript execution time",
                "Optimized assets for 3G/4G networks",
                "Offline capabilities with Service Workers"
            ]
        },
        {
            title: "4. Cognitive Inclusion and Simplicity",
            desc: "Reducing complexity helps users with cognitive disabilities and improves the experience for stressed or distracted users.",
            points: [
                "Clear and predictable user flows",
                "Avoiding rapid animations or flashes",
                "Simple, jargon-free microcopy",
                "Consistent feedback for every user action"
            ]
        },
        {
            title: "5. Future-Proofing with Web Standards",
            desc: "Inclusive engineering follows W3C and WCAG guidelines, which not only helps users but also boosts SEO and legal compliance.",
            points: [
                "Strict adherence to WCAG 2.1 standards",
                "Better SEO through semantic structures",
                "Reduced legal risk and compliance costs",
                "Easier maintenance with standard code"
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
                    Expanding Market Reach with Inclusive and Accessible Engineering
                </motion.h1>

                {/* Intro */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl"
                >
                    Inclusive engineering is about removing the "digital divide." When you build with accessibility in mind, you aren't just helping a specific group—you are improving the experience for every single user.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mb-12"
                >
                    By breaking down technical and physical barriers, inclusive design expands your market reach to millions of potential users who are often overlooked by traditional engineering.
                </motion.p>

                {/* POINTS */}
                <div className="space-y-10 md:space-y-14">
                    {inclusivePoints.map((item, index) => (
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
                    Building for everyone is not just the right thing to do—it's the smart thing to do. Inclusive engineering leads to better products, happier users, and a truly global market presence.
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

export default Expandingdetails
