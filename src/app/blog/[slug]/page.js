"use client";

import BlogContent from "@/components/BlogContent";
import { useEffect, useState } from "react";

export default function Page() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlog = localStorage.getItem("selectedBlog");

    if (storedBlog) {
      const parsed = JSON.parse(storedBlog);
      setBlog(parsed);
    }
  }, []);

  if (!blog) {
    return <p className="text-red-500">No blog found</p>;
  }

  return <BlogContent blog={blog} />;
}
