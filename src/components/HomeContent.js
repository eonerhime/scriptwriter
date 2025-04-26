"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import Button from "./Button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// Define button styles
const btnStyle =
  "w-auto px-6 py-3 border-2 border-primary-50 border-style:solid rounded-md uppercase font-bold text-center cursor-pointer hover:bg-accent-950 transition-color";

export default function HomeContent({ home, testimonials, blog }) {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);

  // Destructure the home content to get the necessary data
  // This assumes home is an array with the first element containing the data
  const {
    // Landing/Cover content
    coverHeader,
    coverSubHeader,
    coverImage,

    // About section
    aboutTitle,
    aboutRider,
    aboutImage,
    aboutHobbies,

    // Services section
    servicesOffer,
    servicesOverview,
    servicesTitle,

    // Portfolio section
    portfolioCTA,
    portfolioSummary,
    portfolioTitle,
  } = home[0];

  // Destructure content for the respective sections
  const landingContent = {
    header: coverHeader,
    subHeader: coverSubHeader,
    image: coverImage,
  };
  const aboutSection = {
    title: aboutTitle,
    rider: aboutRider,
    image: aboutImage,
    hobbies: aboutHobbies,
  };
  const servicesSection = {
    offer: servicesOffer,
    overview: servicesOverview,
    title: servicesTitle,
  };
  const portfolioSection = {
    title: portfolioTitle,
    cta: portfolioCTA,
    summary: portfolioSummary,
  };

  // useEffect for auto-scrolling testimonials
  useEffect(() => {
    let interval = null;
    let isPaused = false;

    const startInterval = () => {
      interval = setInterval(() => {
        if (!isPaused) {
          setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
      }, 20000);
    };

    startInterval();

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("mouseenter", handleMouseEnter);
      containerElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      clearInterval(interval);
      if (containerElement) {
        containerElement.removeEventListener("mouseenter", handleMouseEnter);
        containerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [testimonials.length]);

  // Then in your JSX:
  // <div ref={containerRef}>...</div>

  // Function to view next and previous testimonials
  // This function is called when the user clicks the "Next" or "Prev" buttons
  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to handle blog click and store in local storage
  // It also prevent redownloading the blog data
  const handleBlogClick = (blog) => {
    // This is a workaround for the server action not being able to access local storage directly
    // Store the selected blog in local storage for later use
    localStorage.setItem("selectedBlog", JSON.stringify(blog[0]));

    // Redirect to the blog creation page
    router.push(`/blog/${blog[0].id}`);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    // const subject = formData.get("subject");

    // Send the form data to the server or handle it as needed

    try {
      const res = await fetch("/contactMe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        toast.success("Message sent!");
        e.target.reset();
      } else {
        console.error("Error sending message:", res.statusText);
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Submit failed.");
    }

    setIsSubmitting(false); // Reset submitting state
  };

  return (
    <>
      {/* Landing Content */}
      <section className="grid grid-cols-1 min-[601px]:grid-cols-[40%_60%] text-start mt-24">
        <div className="order-2 mt-4 flex flex-col justify-center min-[601px]:mt-20 min-[601px]:order-1 md:gap-8">
          {/* Animated Heading */}
          <motion.p
            className="mt-6 text-xl text-center min-[601px]:text-start min-[601px]:text-2xl uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {landingContent.header.split(" ").map((word, index) => {
              // Apply different styles based on index
              if (index === 0 || index === 2 || index === 4) {
                return <strong key={index}>{word} </strong>;
              } else if (index === 1 || index === 3) {
                return <em key={index}>{word} </em>;
              } else {
                return <span key={index}>{word} </span>;
              }
            })}
          </motion.p>

          {/* Animated Description */}
          <motion.p
            className="text-sm mt-4 text-center min-[601px]:text-start md:pr-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {landingContent.subHeader}
          </motion.p>

          {/* Animated Button */}
          <div className="mt-6 mx-auto min-[601px]:mx-0">
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
          </div>
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
            src={landingContent.image}
            alt="Ifeoma Emo-Onerhime"
            width={600}
            height={600}
            className="h-full w-fit max-w-[100%] object-cover overflow-visible"
          />
        </motion.div>
      </section>

      {/* Section Separator */}
      <div className="w-[99.175%] opacity-25 border-t border-primary-100 mt-15 mb-15 " />

      {/* About Section */}
      <motion.section className="relative w-full grid-cols-1 gap-12 dark:bg-primary-50 dark:bg-primary-900 dark:text-primary-50 grid md:grid-cols-2 min-[601px]:pr-2">
        <div className="order-1 md:mt-24 min-[769px]:pb-12 min-[601px]:order-1">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <h2 className="text-xl uppercase font-semibold text-center min-[601px]:text-start min-[601px]:text-2xl">
              {aboutSection.title}
            </h2>
            <p className="mt-4 text-sm text-center min-[601px]:text-start ">
              {aboutSection.rider}
            </p>
          </motion.div>
        </div>

        <div className="order-3 text-sm text-center min-[601px]:text-start min-[601px]:order-3 min-[840px]:col-span-1 mt-4 min-[769px]:absolute min-[769px]:left-0 min-[769px]:bottom-0 min-[769px]:mt-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            📌{" "}
            {aboutSection.hobbies.split(", ").map((hobby, index) => {
              if (index === 0 || index === 1) {
                return `${hobby} | `;
              } else {
                return hobby;
              }
            })}
          </motion.p>

          <div className="flex justify-center min-[600px]:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className="mt-6 origin-center" // Ensures even scaling
            >
              <Button btnStyle={`${btnStyle} bg-primary-700 text-primary-50`}>
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
          className="order-2 mb-0 overflow-hidden min-[601px]:order-2 "
          //  md:mt-16 md:mb-16
        >
          <Image
            quality={80}
            src={aboutSection.image}
            alt={aboutSection.image}
            width={600}
            height={600}
            className="h-full w-fit max-w-[100%] object-cover overflow-visible"
          />
        </motion.div>
      </motion.section>

      {/* Section Separator */}
      <div className="w-[99.175%] opacity-25 border-t border-primary-100 mt-15 mb-15 " />

      {/* Services Section */}
      <motion.section className="w-full text-center min-[601px]:text-start min-[601px]:pr-2">
        <h2 className="text-xl uppercase font-semibold min-[601px]:text-2xl">
          {servicesSection.title}
        </h2>
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="mt-2">
              {servicesSection.overview}
              <br />
              <br />

              {servicesSection.offer.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>

            <div className="flex justify-center min-[601px]:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="mt-6 origin-center"
              >
                <Button btnStyle={`${btnStyle} mt-4`}>
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
      <div className="w-[99.175%] opacity-25 border-t border-primary-100 mt-15 mb-15 " />

      {/* Portfolio Section */}
      <motion.section className="w-full text-center min-[601px]:text-start min-[601px]:pr-2">
        <h2 className="text-xl uppercase font-semibold min-[601px]:text-2xl">
          {portfolioSection.title}
        </h2>
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="flex flex-col mt-2 gap-4">
              {portfolioSection.summary} <br />
              <Link href="/contact">
                <span className="underline">Let&apos;s work together!</span> 🌟
              </Link>
            </p>

            <div className="flex justify-center min-[601px]:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="mt-6 origin-center"
              >
                <Button btnStyle={`${btnStyle} mt-4`}>
                  <Link href="/portfolio">
                    <span className="underline">View My Portfolio</span> 💼
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Separator */}
      <div className="w-[99.175%] opacity-25 border-t border-primary-100 mt-15 mb-15 " />

      {/* Testimonials Section */}
      <motion.section className="w-full relative text-start min-[601px]:pr-2">
        <h2 className="text-xl uppercase font-semibold text-center min-[601px]:text-start min-[601px]:text-2xl">
          Testimonials
        </h2>

        {/* Testimonial Display */}
        <div className="relative flex flex-col items-center justify-center mt-8">
          <div className="min-h-[10rem] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg text-center inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Icons & Text */}
                <p className="text-primary-500 italic flex items-center justify-center gap-2">
                  <FaQuoteLeft className="text-4xl" />
                  <span>{testimonials[index].testimonial}</span>
                  <FaQuoteRight className="text-4xl" />
                </p>

                {/* Author Name */}
                <p className="text-primary-500 mt-2 font-bold">
                  {testimonials[index].author} {" - "}
                  {testimonials[index].profile}
                </p>

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
          <div className="flex font-bold justify-center gap-4 mt-6">
            <Button btnStyle={btnStyle} onClick={prevTestimonial}>
              Prev
            </Button>
            <Button btnStyle={btnStyle} onClick={nextTestimonial}>
              Next
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Section Separator */}
      <div className="w-[99.175%] opacity-25 border-t border-primary-100 mt-15 mb-15 " />

      {/* Blog Section */}
      <motion.section
        className="max-w-7xl text-center min-[601px]:text-start min-[601px]:pr-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl uppercase font-semibold min-[601px]:text-2xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Latest Blog Post
        </motion.h2>

        <button onClick={() => handleBlogClick(blog)}>
          <motion.div
            className="cursor-pointer mt-8 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 md:gap-4 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Image second on mobile, first on desktop */}
            <div className="w-full order-2 md:order-1 row-span-2">
              <Image
                src={blog[0].image}
                alt={blog[0].title}
                width={600}
                height={600}
                className="!w-full !h-full object-cover rounded-lg"
              />
            </div>

            {/* Text Content (Title + Excerpt) */}
            <div className="order-1 md:order-2 flex flex-col h-full space-y-3 md:justify-start md:text-start">
              <h2 className="text-2xl font-bold text-accent-950">
                {blog[0].title}
              </h2>
              <div className="md:self-center">
                <p>{blog[0].excerpt}</p>
              </div>
            </div>
            <div className="order-3 md:order-2 mt-4">
              <p className="w-fit border-2 border-primary-50 p-2 rounded-md text-start cursor-pointer">
                Read Full Post...
              </p>
            </div>
          </motion.div>
        </button>
      </motion.section>

      {/* Section Separator */}
      <div className="w-[99.175%] opacity-25 border-t border-primary-100 mt-15 mb-15 " />

      {/* Contact Section */}
      <section className="flex flex-col mx-auto items-center justify-center w-full md:w-4/5 max-w-3xl mb-10  min-[601px]:pr-2">
        <h2 className="text-xl uppercase font-semibold text-center min-[601px]:text-start min-[601px]:text-2xl">
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-4 text-primary-50 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 bg-primary-700 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 bg-primary-700 rounded-md"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 bg-primary-700 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 bg-primary-700 rounded-md"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 font-bold rounded-md transition cursor-pointer ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-accent-950 hover:bg-primary-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}
