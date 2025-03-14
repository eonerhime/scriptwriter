"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function AboutContent({ profileImage }) {
  return (
    <div className="grid grid-cols-1 gap-6 max-w-full py-8 min-[601px]:grid-cols-[40%_60%] min-[601px]:gap-12">
      {/* Profile Image */}
      <motion.div
        className="h-full md:shrink-0 shadow-lg row-span-1 order-2 min-[601px]:max-w-max min-[601px]:order-1 min-[840px]:row-span-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          quality={80}
          src={profileImage}
          alt="Ifeoma Emo-Onerhime"
          width={500}
          height={500}
          className="object-cover overflow-visible max-w-full min-[601px]:h-full min-[601px]:w-full"
        />
      </motion.div>

      {/* Animated Heading */}
      <div className="text-start order-1 mt-4 min-[601px]:text-start min-[601px]:mt-12 min-[601px]:order-2">
        <motion.h1
          className="text-center text-xl font-bold text-primary-50 uppercase min-[840px]:text-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Scriptwriter
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-4 text-primary-50 text-base leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="font-semibold text-accent-950">
            Ifeoma Emo-Onerhime
          </span>{" "}
          is a passionate writer with almost 2 decades of writing experience. My
          goal is to inspire the world through words and connect with others. I
          have my works showcased on some of the biggest stages in African and
          the world, like ShowMax, Africa Magic, and Amazon Prime.
        </motion.p>
      </div>

      {/* Fun Fact or Interest */}
      <div className="order-3 text-center min-[601px]:col-span-2 min-[840px]:col-span-1">
        <motion.p
          className="text-primary-200 col-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          🍫 Lover of chocolates | 📖 Avid reader | 🍳 Cooking enthusiast | 📱
          Social media explorer
        </motion.p>
      </div>

      {/* Call-to-Action Button */}
      <div className="flex justify-center order-4 min-[601px]:col-span-2 min-[840px]:col-span-1">
        {/* Social Media Links */}
        <motion.div
          className="flex justify-start space-x-4 text-primary-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-950 text-2xl"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-950 text-2xl"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-950 text-2xl"
          >
            <FaLinkedin />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutContent;
