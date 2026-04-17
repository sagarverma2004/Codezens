import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom";

function Leveragingdetails() {

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

    const microPoints = [
        {
            title: "1. Meaningful Visual Feedback",
            desc: "Every action should have a reaction. Micro-interactions like a button 'pressing' or a success checkmark animation confirm the user's intent instantly.",
            points: [
                "Haptic-like hover and active states",
                "Instant validation on form inputs",
                "Smooth loading skeletons instead of blank screens",
                "Interactive progress indicators for long tasks"
            ]
        },
        {
            title: "2. Delighting with Subtle Animations",
            desc: "Small, unexpected animations—like a heart 'pop' when liking or a bell 'jingle' for notifications—create emotional connections with the user.",
            points: [
                "Micro-animations for status changes",
                "Playful transitions between UI states",
                "Staggered entry for list items",
                "Hover-triggered depth and shadow effects"
            ]
        },
        {
            title: "3. Guiding Attention via Motion",
            desc: "Motion can be a powerful tool to lead the user's eye to what matters most, like a new feature alert or a crucial call-to-action.",
            points: [
                "Gentle pulses for unread messages",
                "Directional cues for scrolling or swiping",
                "Highlighting updated fields with color fades",
                "Contextual tooltips that emerge on interaction"
            ]
        },
        {
            title: "4. Reducing Perceived Wait Time",
            desc: "Interactive micro-moments can make a 3-second wait feel like 1 second by keeping the user engaged with visual storytelling during processing.",
            points: [
                "Animated brand mascots or logos",
                "Dynamic percentage counters",
                "Step-by-step progress narratives",
                "Engaging background transitions"
            ]
        },
        {
            title: "5. Reinforcing Brand Personality",
            desc: "Micro-interactions are the 'voice' of your UI. Whether sleek and professional or bouncy and fun, they define your brand's unique character.",
            points: [
                "Custom-tailored easing functions",
                "Brand-specific sound and haptic cues",
                "Unique icon morphing animations",
                "Cohesive motion language across the platform"
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
                    Leveraging Interactive Micro-Moments for Higher User Retention
                </motion.h1>

                {/* Intro */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl"
                >
                    User retention isn't built only on big features; it's built in the small moments. These "micro-moments" are the tiny details that make a digital product feel alive and responsive.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl md:mb-12"
                >
                    By focusing on interactive feedback and subtle animations, you can transform a static interface into a dynamic experience that keeps users engaged, satisfied, and coming back.
                </motion.p>

                {/* POINTS */}
                <div className="space-y-10 md:space-y-14">
                    {microPoints.map((item, index) => (
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
                    Great UX is often invisible, but micro-moments are where the magic is felt. When you master these interactions, your product stops being just a tool and starts being an experience.
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

export default Leveragingdetails
