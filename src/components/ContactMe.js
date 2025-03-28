"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import SubmitEnquiryForm from "./SubmitEnquiryForm";

// Shows on Contact only
const metadata = {
  title: "Contact | Ifeoma Emo-Onerhime",
};

export default function Page() {
  return (
    <div className=" mt-36 mb-8 grid grid-cols-1 min-[840px]:grid-cols-2 gap-8 md:px-12">
      {/* Contact Info Section */}
      <div className="flex flex-col justify-center text-center mt-6">
        <h2 className="text-xl font-bold uppercase min-[840px]:text-2xl mb-6  dark:text-primary-50">
          Contact Me
        </h2>

        <motion.p
          className="text-lg mb-6  dark:text-primary-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Fill out the form, and I&apos;ll be in touch shortly.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="grid grid-cols-3 justify-between place-items-center min-[601px]:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { url: "https://facebook.com", delay: 0.7 },
            { url: "https://instagram.com", delay: 0.8 },
            { url: "https://linkedin.com/", delay: 0.9 },
          ].map((social, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: social.delay, duration: 0.6 }}
            >
              <SocialIcon
                bgColor="transparent"
                fgColor="currentColor"
                url={social.url}
                className="border-2 border-solid rounded-full  dark:text-primary-50"
                target="_blank"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <SubmitEnquiryForm />
      </motion.div>
    </div>
  );
}
