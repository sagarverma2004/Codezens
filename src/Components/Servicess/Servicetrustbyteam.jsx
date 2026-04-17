import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
    {
        name: "Sarah M.",
        role: "Product Director . USA",
        text: "CodeZens helped us launch faster than we imagined. Their clarity, design sense, and communication made the entire process effortless.",
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
        name: "Alex Rivera",
        role: "CEO . Germany",
        text: "CodeZens helped us launch faster than we imagined. Their clarity, design sense, and communication made the entire process effortless.",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
        name: "James Chen",
        role: "Tech Lead . Singapore",
        text: "CodeZens helped us launch faster than we imagined. Their clarity, design sense, and communication made the entire process effortless.",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    }
];

function Servicetrustbyteam() {
    const [index, setIndex] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="px-4 bg-black h-70">
            <div className="flex flex-col items-center mx-auto max-w-7xl">
                <div className="pt-10 mx-auto max-w-135 md:py-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        // viewport={{ once: true, amount: 0.2 }}
                        className="text-2xl leading-5 text-center md:text-5xl md:leading-14 -mt-80">
                        Trusted by Teams, Loved by Clients
                    </motion.p>
                </div>

                {/* Slider Container (Pink Div) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="lg:w-200 bg-[#FBF5D9] -mt-50 text-center flex flex-col items-center px-5 lg:px-30 py-10 relative overflow-hidden">
                    {/* mode="popLayout" se animation smooth chalti hai bina layout bigde */}
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{
                                x: { type: "spring", stiffness: 200, damping: 25 },
                                opacity: { duration: 0.3 }
                            }}
                            className="flex flex-col items-center"
                        >
                            <img src={testimonials[index].img}
                                alt=""
                                className="object-cover rounded-full size-14" />

                            <h1 className="py-2 font-bold">
                                {testimonials[index].name}
                            </h1>

                            <p className="pb-5 text-[#555555] font-sans font-medium text-xs md:text-md">
                                {testimonials[index].text}
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <h3 className="">{testimonials[index].role}</h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots indicator (Optional, for better UX) */}
                    <div className="flex gap-2 mt-4">
                        {testimonials.map((_, i) => (
                            <div key={i} className={`h-1.5 w-1.5 rounded-full ${index === i ? "bg-black" : "bg-gray-300"}`} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Servicetrustbyteam;
