"use client";

import { motion } from "framer-motion";

function BlogList({ posts }) {
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
        Ifeoma&apos;s Blog
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Ifeoma&apos;s blog is a collection of posts that are inspired by her
        life&apos;s experiences. Enjoy and be inspired.
      </motion.p>

      {/* Blog Posts Grid with Staggered Animation */}
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
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img src={post.image} alt="image" className="rounded-lg" />
            <h2 className="uppercase font-bold">{post.title}</h2>
            <p>
              Felis nascetur. Semper ridiculus. Vehicula. Pellentesque. Feugiat.
              Ex senectus. Consequat. Dolor. Lacinia.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default BlogList;
