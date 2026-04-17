import { IoArrowForward } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import in1 from "../Inslight/img/in1.png";
import in2 from "../Inslight/img/in2.png";
import in3 from "../Inslight/img/in3.png";
import in4 from "../Inslight/img/in4.png";
import in5 from "../Inslight/img/in5.png";
import in6 from "../Inslight/img/in6.png";
import in7 from "../Inslight/img/in7.png";
import in8 from "../Inslight/img/in8.png";
import in9 from "../Inslight/img/in9.png";

function Inscards() {
  const cardParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const cardChild = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const cards = [
    { img: in1, title: "How Good UX Improves Your Product’s ROI", link: "/card1" },
    { img: in2, title: "Transforming Loading Speeds into Scalable Revenue Growth", link: "/card2" },
    { img: in3, title: "Maximizing Conversions through Frictionless Navigation Logic", link: "/card3" },
    { img: in4, title: "Building Brand Authority with High-Performance Visual Identity", link: "/card4" },
    { img: in5, title: "Expanding Market Reach with Inclusive and Accessible Engineering", link: "/card5" },
    { img: in6, title: "Reducing Operational Costs via Self-Service User Experience", link: "/card6" },
    { img: in7, title: "Driving Mobile Engagement with Responsive First-Class Design", link: "/card7" },
    { img: in8, title: "Optimizing Checkout Workflows to Eliminate Cart Abandonment", link: "/card8" },
    { img: in9, title: "Leveraging Interactive Micro-Moments for Higher User Retention", link: "/card9" },
  ];

  return (
    <section className="px-4 my-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={cardParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardChild}
              className="flex flex-col h-full overflow-hidden bg-white shadow-md rounded-2xl"
            >
              <img
                src={card.img}
                alt=""
                className="object-cover w-full h-48"
              />

              <div className="flex flex-col flex-1 p-4">
                <p className="mb-2 text-lg font-semibold sm:text-xl">
                  {card.title}
                </p>

                <p className="text-sm text-gray-600">
                  A quick breakdown of why design isn’t just visual — it’s a business advantage.
                </p>

                <Link
                  to={card.link}
                  className="flex items-center gap-2 pt-6 mt-auto text-sm font-medium transition-all duration-300 hover:gap-4"
                >
                  Read More
                  <IoIosArrowRoundForward className="bg-[#FFCD00] rounded-full" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
             viewport={{ once: true, amount: 0.2 }}
            className="flex items-center gap-2 px-6 py-2 bg-[#FFCD00] rounded-lg cursor-pointer"
          >
            Next
            <IoArrowForward />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Inscards;
