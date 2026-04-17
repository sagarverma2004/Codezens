import { motion } from "framer-motion";

function Map() {
    return (
        <>
            <div className="py-12 md:py-24 overflow-hidden px-4 md:px-0">

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full h-170 ">
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        title="Office Location"
                        src={`https://www.google.com/maps?q=Your Office Address Here&output=embed`}
                    ></iframe>
                </motion.div>




            </div>
        </>
    );
}

export default Map;
