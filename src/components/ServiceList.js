"use client";

import { useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion } from "framer-motion";

export default function ServiceList({ services }) {
  return (
    <div className="relative w-full align-middle mt-6 mb-12">
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
      <div className="relative grid grid-cols-1 auto-rows-auto gap-6 text-center mt-8 min-[601px]:grid-cols-2 min-[840px]:grid-cols-3">
        {services.map((service, index) => (
          <FlipCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

// Flip Card Component
function FlipCard({ service }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-4/5 max-w-xs h-64 mx-autoperspective-1000 cursor-pointer mb-4"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full rounded-lg transform-style-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-500 text-primary-50 rounded-lg">
          <div className="mt-4 text-4xl">{service.icon}</div>
          <h2 className="uppercase font-bold">{service.title}</h2>
        </div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-accent-950 text-primary-50 px-4 py-6 rounded-lg"
          initial={{ rotateY: 180, opacity: 0 }}
          animate={{ opacity: flipped ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <LoremIpsum
            random={true}
            avgWordsPerSentence={5}
            avgSentencesPerParagraph={2}
            startWithLoremIpsum={false}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
