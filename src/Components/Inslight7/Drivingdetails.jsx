import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";

function Drivingdetails() {

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

    const mobilePoints = [
        {
            title: "1. Thumb-Driven Interaction Design",
            desc: "Most users navigate with one hand. Designing for the 'Thumb Zone' ensures that key actions are always within easy reach, reducing physical strain.",
            points: [
                "Bottom-aligned navigation and call-to-actions",
                "Large, easy-to-tap touch targets",
                "Gesture-based interactions like swiping",
                "Optimized spacing to prevent accidental clicks"
            ]
        },
        {
            title: "2. Lightning-Fast Mobile Performance",
            desc: "Mobile users are often on the go. Every millisecond counts. A first-class design prioritizes speed to keep users from bouncing.",
            points: [
                "Lazy loading for images and heavy assets",
                "Minimized data usage for unstable networks",
                "Accelerated Mobile Pages (AMP) logic",
                "Efficient code that preserves battery life"
            ]
        },
        {
            title: "3. Adaptive and Fluid Layouts",
            desc: "Responsive design isn't just about shrinking elements. It's about content adapting beautifully to every possible screen aspect ratio.",
            points: [
                "Fluid grids that scale proportionally",
                "Dynamic typography for perfect readability",
                "Conditional rendering for mobile-only features",
                "Seamless transitions between portrait and landscape"
            ]
        },
        {
            title: "4. Minimizing Cognitive Load",
            desc: "Small screens have limited space. Mobile-first design focuses on 'progressive disclosure'—showing only what's necessary at the right time.",
            points: [
                "Simplified forms and checkout processes",
                "Clear visual hierarchy with bold headings",
                "Collapsible sections for dense information",
                "Smart use of icons to save valuable space"
            ]
        },
        {
            title: "5. Mobile-Specific Engagement Triggers",
            desc: "Leveraging mobile-native features can significantly boost retention and interaction rates compared to desktop-only experiences.",
            points: [
                "Integration with native share and pay sheets",
                "Push notification prompts for re-engagement",
                "Location-based personalized content",
                "Biometric authentication for faster logins"
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
                    Driving Mobile Engagement with Responsive First-Class Design
                </motion.h1>

                {/* Intro */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl"
                >
                    With over 60% of web traffic coming from mobile devices, a "mobile-friendly" site is no longer enough. You need a mobile-first strategy that captivates users in the palm of their hands.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mb-12"
                >
                    First-class mobile design blends speed, ergonomics, and smart layouts to create an addictive user experience that keeps people coming back for more.
                </motion.p>

                {/* POINTS */}
                <div className="space-y-10 md:space-y-14">
                    {mobilePoints.map((item, index) => (
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
                    Mastering mobile engagement is the key to winning the modern digital landscape. When your design feels native to the device, your users feel right at home.
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

export default Drivingdetails
