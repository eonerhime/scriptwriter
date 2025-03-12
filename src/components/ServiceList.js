"use client";

import { LoremIpsum } from "react-lorem-ipsum";
import { motion } from "framer-motion";

export default function Page({ services }) {
  return (
    <div className="relative w-full h-screen mt-6">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-center bg-cover bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('http://localhost:3000/wd2.jpg')" }}
      />

      {/* Animated Title */}
      <motion.h1
        className="text-center text-xl font-bold text-primary-50 uppercase min-[840px]:text-2xl pt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Services
      </motion.h1>

      {/* Service Cards Grid */}
      <div className="absolute grid grid-cols-[1fr] auto-rows-auto gap-4 text-center top-24 left-0 w-full h-full min-[601px]:grid-cols-[1fr_1fr] min-[840px]:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center gap-4 pb-6 ${
              index === 0
                ? " min-[840px]:col-start-1 min-[840px]:col-end-3"
                : index === 1
                ? " min-[840px]:col-start-3 min-[840px]:col-end-5"
                : index === 2
                ? " min-[840px]:col-start-5 min-[840px]:col-end-7"
                : index === 3
                ? " min-[840px]:col-start-2 min-[840px]:col-end-4"
                : "min-[840px]:col-start-4 min-[840px]:col-end-6"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div>{service.icon}</div>
            <h2 className="uppercase font-bold">{service.title}</h2>
            <LoremIpsum
              random={true}
              avgWordsPerSentence={1}
              startWithLoremIpsum={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
