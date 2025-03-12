"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function PortfolioList({ portfolio }) {
  return (
    <motion.div
      className="mt-12 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Title & Description */}
      <motion.h2
        className="uppercase font-bold text-2xl mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ifeoma&apos;s Portfolio
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Ifeoma&apos;s portfolio is a collection of posters of feature films and
        TV serials she has writter, and have been aired.
      </motion.p>

      {/* Portfolio Grid with Staggered Animation */}
      <motion.div
        className="grid grid-cols-[1fr] auto-rows-auto justify-between gap-12 text-center w-full h-full mt-12 min-[601px]:grid-cols-[1fr_1fr] min-[840px]:grid-cols-[1fr_1fr_1fr]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {portfolio.map((poster, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              width={400}
              height={400}
              quality={80}
              loading="lazy"
              src={poster.image}
              alt="Portfolio Image"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default PortfolioList;
