import { motion } from "framer-motion"
import LineBackground from "../Homes/img/LineBackground.png"
import in3 from "../Inslight/img/in3.png"

function MaximizingHero() {

    return (

        <section className="relative w-full px-4 overflow-hidden bg-white">
                     {/* 1. Background Image */}
                     <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
                       <img
                         src={LineBackground}
                         alt="background"
                         className="object-cover w-full h-full"
                       />

                       {/* 2. Heading - Isko absolute rakha hai taaki ye center mein hi rahe */}
                       <div className="absolute inset-0 flex items-center justify-center px-4">
                         <motion.h1
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8 }}
                           className="max-w-5xl text-3xl font-bold leading-tight text-center text-black sm:text-5xl md:text-6xl lg:text-7xl"
                         >
                           How Good UX Improves Your Product’s ROI
                         </motion.h1>
                       </div>
                     </div>

                     {/* 3. Bottom Image - Heading ke theek niche se start hogi */}
                     <div className="relative z-20 flex justify-center w-full px-4 -mt-20 sm:-mt-32 md:-mt-40">
                       <motion.div
                         initial={{ opacity: 0, y: 100 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="w-full max-w-6xl"
                       >
                         {/* No rounding, just sharp edges */}
                         <img
                           src={in3}
                           alt="product visual"
                           className="block object-cover w-full shadow-2xl h-150"
                         />
                       </motion.div>
                     </div>
                   </section>
    )
}

export default MaximizingHero;
