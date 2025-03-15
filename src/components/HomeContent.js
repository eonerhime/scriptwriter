"use client";

import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import LoremIpsum from "react-lorem-ipsum";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    text: "Ifeoma is a masterful storyteller with a unique voice and vision. Her scripts are meticulously crafted, with complex characters, razor-sharp dialogue, and narratives that captivate and inspire. I can't wait to see what she comes up with next."
    name: "Iyke-u-Anthoni – Nollywood Director",
    rating: 5,
  },
  {
    text: "Ifeoma is a gifted screenwriter with a unique voice. She has crafted exceptional scripts for me, including Indigo Glass, Akpos and Company, Mr. Wonderful, and Scarred. Her creativity and dedication make her a top choice for any screenplay project.",
    name: "Mike Nliam –  Veteran Nollywood producer",
    rating: 5,
  },
  {
    text: "Ifeoma&apos;s insightful feedback pushed me to refine my script in ways I hadn&apos;t considered. Her detailed notes were both actionable and encouraging, making my story stronger. If you need a screenwriter who truly understands structure and character, she&apos;s an invaluable resource.",
    name: "Oneme Ofurhie – Digital Animator, Producer USA",
    rating: 5,
  },
  {
    text: "Ifeoma Onerhime masterfully adapted my novel Burning Hurt into a compelling screenplay. Her passion, creativity, and keen storytelling brought my characters to life in unexpected ways. Professional, dedicated, and a joy to work wit — I highly recommend her for capturing emotion and depth in any script.",
    name: "-	Amb. Dr. Unyime-Ivy King – Author, Burning Hurt",
    rating: 5,
  },
  {
    text: "Ifeoma Onerhime transformed my deeply personal experiences into a powerful script with empathy and skill. Her warm, attentive nature made sharing my story effortless, and she captured its essence even better than I could. I have no regrets working with her and will do so again. If you need a screenwriter who truly listens and understands, I highly recommend Ifeoma.",
    name: "Misan Udogie – Author,  Executive Producer &apos;My Name is Misan&apos;",
    rating: 5,
  },
];

const btnStyle =
  "w-auto px-6 py-3 border-2 border-primary-50 border-style:solid rounded-md uppercase font-bold text-center cursor-pointer hover:bg-primary-50 hover:text-primary-900 transition";

export default function HomeContent({ profileImage }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Landing Content */}
      <section className="grid grid-cols-1 min-[601px]:grid-cols-[40%_60%]">
        <div className="order-2 mt-4 z-30 flex flex-col items-center justify-center min-[601px]:mt-20 min-[601px]:order-1 md:gap-8">
          {/* Animated Heading */}
          <motion.p
            className="mt-6 text-center text-xl min-[601px]:text-2xl uppercase"
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
            I am a script writer, author and content writer. I bring to life
            your ideas for your films, TV and documentary.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="mt-6"
          >
            <Button btnStyle={`${btnStyle} flex gap-2 w-auto px-6 py-3`}>
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
            width={600}
            height={600}
            className="h-full w-fit max-w-[100%] object-cover overflow-visible"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section className="container relative gap-8 bg-primary-50 text-primary-950 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="order-1 md:mt-32 min-[601px]:order-1">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-16 md:pt-0"
          >
            <h2 className="text-xl uppercase font-semibold min-[601px]:text-2xl">
              About Me
            </h2>
            <p className="mt-4 text-sm">
              With a passion for storytelling, I craft engaging narratives for
              films, TV series, and blogs. I turn ideas into captivating
              stories.
            </p>
          </motion.div>
        </div>

        <div className="clear md:absolute left-6 bottom-14 order-3 mt-0 text-sm text-start mb-12 min-[601px]:order-3 min-[840px]:col-span-1">
          <motion.p
            className="text-primary-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            📌 Scriptwriting | Blogging | Copywriting
          </motion.p>

          <div className="flex justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className="mt-6 origin-center" // Ensures even scaling
            >
              <Button
                btnStyle={`${btnStyle} bg-primary-700 text-primary-50 mt-4`}
              >
                <Link href="/about">Read more...</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* About image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="order-2 mb-0 overflow-hidden h-[200px] min-[601px]:order-2 md:mt-16 md:mb-16 md:h-[400px] "
        >
          <img src="/about-me.jpg" alt="About" className="w-max shadow-lg" />
        </motion.div>
      </motion.section>

      {/* Section Separator */}
      <div className="w-full opacity-25 my-8 border-t border-primary-100 mt-20"></div>

      {/* Services Section */}
      <motion.section className="container px-6 mt-8">
        <h2 className="text-xl uppercase font-semibold min-[601px]:text-2xl">
          My Services
        </h2>
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="mt-2 text-primary-50">
              Great stories deserve great scripts! Whether it’s a film, TV
              series, web content, or short film, I craft engaging,
              well-structured scripts that captivate audiences and bring ideas
              to the screen.
              <br />
              ✨ What I Offer: <br />
              🎬 Screenwriting – From concept to polished script. <br />
              📝 Dialogue Perfection – Authentic and impactful conversations.{" "}
              <br />
              🎭 Character Development – Creating memorable, dynamic characters.{" "}
              <br />
              📖 Story Structuring – Ensuring strong narratives with compelling
              arcs. Ready to transform your vision into a masterpiece?
            </p>

            <div className="flex justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="mt-6 origin-center"
              >
                <Button btnStyle={`${btnStyle} text-primary-50 mt-4`}>
                  <Link href="/services">
                    <span className="underline">Explore My Services</span> 🚀
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Separator */}
      <div className="w-full opacity-25 my-8 border-t border-primary-100 mt-20"></div>

      {/* Portfolio Section */}
      <motion.section className="container px-6 mt-8">
        <h2 className="text-xl uppercase font-semibold min-[601px]:text-2xl">
          My Portfolio
        </h2>
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="mt-2 text-primary-50">
              Check out some of my recent projects. From screenplays to blog
              posts, I bring ideas to life with engaging stories and compelling
              narratives. 🎥 Ready to see your story come to life? <br />
              <Link href="/contact" className="underline">
                Let&apos;s work together!
              </Link>{" "}
              🌟
            </p>

            <div className="flex justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="mt-6 origin-center"
              >
                <Button btnStyle={`${btnStyle} text-primary-50 mt-4`}>
                  <Link href="/services">
                    <span className="underline">View My Portfolio</span> 💼
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="container relative bg-primary-50 text-primary-950 mx-auto px-6 mt-20 py-10 text-center">
        <h2 className="text-xl uppercase font-semibold min-[601px]:text-2xl">
          Testimonials
        </h2>

        {/* Testimonial Display */}
        <div className="relative flex flex-col items-center justify-center mt-8">
          <div className="min-h-[10rem] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md text-center inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Icons & Text */}
                <p className="text-gray-700 italic flex items-center justify-center gap-2">
                  <FaQuoteLeft className="text-primary-700 text-4xl" />
                  <span>{testimonials[index].text}</span>
                  <FaQuoteRight className="text-primary-700 text-4xl" />
                </p>

                {/* Author Name */}
                <p className="mt-2 font-bold">{testimonials[index].name}</p>

                {/* Star Ratings */}
                <div className="flex justify-center mt-2 text-yellow-500">
                  {Array.from({ length: testimonials[index].rating }).map(
                    (_, i) => (
                      <FaStar key={i} />
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              className="px-6 py-3 bg-primary-700 text-white rounded-md"
              onClick={prevTestimonial}
            >
              Prev
            </button>
            <button
              className="px-6 py-3 bg-primary-700 text-white rounded-md"
              onClick={nextTestimonial}
            >
              Next
            </button>
          </div>
        </div>
      </motion.section>

      {/* Section Separator */}
      <div className="w-full opacity-25 my-8 border-t border-primary-100 mt-20"></div>

      {/* Blog Section */}
      <motion.section
        className="max-w-7xl py-10 text-start px-6 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href="/blog">
          <motion.h2
            className="text-xl uppercase font-semibold min-[601px]:text-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Latest Blog Post
          </motion.h2>

          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 md:gap-4 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Image second on mobile, first on desktop */}
            <div className="w-full order-2 md:order-1">
              <img
                src="https://picsum.photos/id/60/400/300"
                alt="Blog post image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text Content (Title + Excerpt) */}
            <div className="order-1 md:order-2 flex flex-col h-full space-y-3 md:justify-start">
              <h2 className="text-2xl font-bold text-accent-950">
                The Art of Writing Engaging Dialogues
              </h2>
              <p className="text-primary-100 md:self-center">
                <LoremIpsum
                  random={true}
                  avgWordsPerSentence={4}
                  startWithLoremIpsum={true}
                />
              </p>
            </div>
          </motion.div>
        </Link>
      </motion.section>

      {/* Section Separator */}
      <div className="w-full opacity-25 my-8 border-t border-primary-100 mt-20"></div>

      {/* Contact Section */}
      <section className="mx-auto w-4/5 max-w-3xl py-10 text-center">
        <h2 className="text-xl uppercase font-semibold min-[601px]:text-2xl">
          Get in Touch
        </h2>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-primary-700 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-primary-700 rounded-md"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-primary-700 rounded-md"
          ></textarea>
          <button className="w-full px-6 py-3 font-bold bg-accent-950 uppercase text-primary-50ß rounded-md hover:bg-primary-700 transition cursor-pointer">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
