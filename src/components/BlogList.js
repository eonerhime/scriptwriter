"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import FilterSortOperations from "./FilterSortOperations";
import { useBlogs } from "@/hooks/useBlogs";
import { useEffect, useState } from "react";

function BlogList() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State to track parameter changes
  const [params, setParams] = useState({
    category: searchParams.get("category"),
    sortBy: searchParams.get("sortBy"),
  });

  // Fetch blogs whenever search params change
  useEffect(() => {
    const newCategory = searchParams.get("category");
    const newSortBy = searchParams.get("sortBy");

    // Update params if they've changed
    if (newCategory !== params.category || newSortBy !== params.sortBy) {
      setParams({
        category: newCategory,
        sortBy: newSortBy,
      });
    }
  }, [searchParams]);

  // Map sortBy values to appropriate field and direction
  let filter = { value: "created_at", status: false };

  if (params.sortBy) {
    // Handle different sort options
    switch (params.sortBy) {
      case "a-z":
        filter = { value: "title", status: true }; // A-Z (ascending)
        break;
      case "z-a":
        filter = { value: "title", status: false }; // Z-A (descending)
        break;
      case "newest":
        filter = { value: "created_at", status: false }; // Newest first (descending)
        break;
      case "oldest":
        filter = { value: "created_at", status: true }; // Oldest first (ascending)
        break;
    }
  }

  // Set up category filter if present
  const filterBy =
    params.category && params.category !== "all"
      ? { category: params.category }
      : {};

  // Use custom hook to fetch blogs with the correct parameter structure
  const {
    blogs: blogList,
    loading,
    error,
    refetch,
  } = useBlogs("blog", filter, filterBy, []);

  // Function to handle blog click and store in local storage
  const handleBlogClick = (blog) => {
    localStorage.setItem("selectedBlog", JSON.stringify(blog));
    router.push(`/blog/${blog.id}`);
  };

  return (
    <motion.div
      className="mt-36 mb-12 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Rest of your component stays the same */}
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

      <div className="w-full flex justify-end">
        <FilterSortOperations />
      </div>

      {/* Loading and Error States */}
      {loading && <p className="text-center py-8">Loading blogs...</p>}
      {error && (
        <p className="text-center py-8 text-red-500">Error: {error.message}</p>
      )}

      {/* Blog Posts Grid with Staggered Animation */}
      {!loading && !error && (
        <motion.div
          className="grid grid-cols-[1fr] auto-rows-auto justify-between gap-12 text-center w-full h-full mt-6 min-[601px]:grid-cols-[1fr_1fr] min-[840px]:grid-cols-[1fr_1fr_1fr]"
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
          {blogList?.length > 0 ? (
            blogList.map((blog, index) => (
              <button
                key={blog?.id}
                onClick={() => handleBlogClick(blog)}
                className="border-1 p-4 rounded-lg border-accent-950 cursor-pointer items-start"
              >
                <motion.div
                  key={index}
                  className="flex flex-col gap-4 cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-3 mb-0">
                    <div className="w-full h-64 relative">
                      <Image
                        src={blog.image}
                        sizes=""
                        alt="Post Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  <h2 className="uppercase font-bold">{blog.title}</h2>
                  <p>{blog.excerpt}</p>
                </motion.div>
              </button>
            ))
          ) : (
            <p className="col-span-full text-center py-8">
              No blogs found matching your criteria.
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default BlogList;
