"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import bgImage from "../../public/wd2.jpg";
import Image from "next/image";

import {
  TvIcon,
  FilmIcon,
  PencilIcon,
  AcademicCapIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const servicesIcons = [
  <TvIcon key="TvIcon" className="h-12 w-12 text-primary-50" />,

  <FilmIcon key="FilmIcon" className="h-12 w-12 text-primary-50" />,

  <PencilIcon key="PencilIcon" className="h-12 w-12 text-primary-50" />,

  <AcademicCapIcon
    key="AcademicCapIcon"
    className="h-12 w-12 text-primary-50"
  />,

  <PencilSquareIcon
    key="PencilSquareIcon"
    className="h-12 w-12 text-primary-50"
  />,
];

export default function ServiceList({ services }) {
  return (
    <div className="relative w-full align-middle mt-28 mb-12">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          src={bgImage}
          alt="scriptwriter bg image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-20"
        />
      </div>

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
        {/* flex flex-col items-center */}
        {services.map((service, index) => (
          <FlipCard key={index} service={service} icon={servicesIcons[index]} />
        ))}
      </div>
    </div>
  );
}

// Flip Card Component
function FlipCard({ service, icon }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-4/5 max-w-xs h-80 mx-auto perspective-1000 cursor-pointer mb-4 border-2 border-accent-950 hover-border-primary-500 rounded-lg"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((value) => !value)}
    >
      <motion.div
        className="relative w-full h-full rounded-lg transform-style-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-500 text-primary-50 rounded-lg">
          <div className="text-4xl">{icon}</div>
          <h2 className="mt-6 uppercase font-bold">{service.serviceOffer}</h2>
        </div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-accent-950 text-primary-50 px-4 py-6 rounded-lg"
          initial={{ rotateY: 180, opacity: 0 }}
          animate={{ opacity: flipped ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {service.serviceDetails}
        </motion.div>
      </motion.div>
    </div>
  );
}
