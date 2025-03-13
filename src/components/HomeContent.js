"use client";

import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const btnStyle =
  "flex gap-2 w-40 py-3 border-2 border-primary-50  border-style:solid rounded-md uppercase font-bold justify-center align-middle";

export default function HomeContent({ profileImage }) {
  return (
    <>
      {/* Landing Content */}
      <section className="grid grid-cols-1 min-[601px]:grid-cols-[40%_60%]">
        <div className="order-2 mt-4 z-30 flex flex-col items-center justify-center min-[601px]:mt-20 min-[601px]:order-1 md:gap-8">
          {/* Animated Heading */}
          <motion.p
            className="mt-6 text-center text-xl min-[840px]:text-2xl uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <strong>Let&apos;s</strong> <em>Create</em>{" "}
            <strong>Something</strong> <em>Great</em> <strong>Together</strong>
          </motion.p>

          {/* Animated Description */}
          <motion.p
            className="text-center text-sm mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I am a freelance script writer, author and content writer. I bring
            to life your ideas for your films, TV and documentary.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="mt-6"
          >
            <Button btnStyle={btnStyle}>
              <Link href="/contact">Let&apos;s Talk</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Animated Profile Image */}
        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Image
            quality={80}
            src={profileImage}
            alt="Ifeoma Emo-Onerhime"
            width={500}
            height={500}
            className="h-full w-fit max-w-[100%] object-cover overflow-visible"
          />
        </motion.div>
      </section>

      {/* About Me */}
      <section></section>
    </>
  );
}
