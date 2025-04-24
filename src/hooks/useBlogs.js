"use client";

import { useEffect, useState } from "react";
import { getContent } from "@/lib/data-services";

export function useBlogs(slug, filter, filterBy, sortBy = []) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Create a serialized key from all parameters to detect changes
  const paramsKey = `${slug}-${JSON.stringify(filter)}-${JSON.stringify(filterBy)}-${JSON.stringify(sortBy)}`;

  useEffect(() => {
    // Track whether the component is mounted
    let isMounted = true;

    async function getData() {
      setLoading(true);
      setError("");

      try {
        const result = await getContent(slug, filter, filterBy, sortBy);

        // Only update state if component is still mounted
        if (isMounted) {
          setBlogs(result);
        }
      } catch (err) {
        if (isMounted) {
          setError("Something went wrong fetching blogs.");
          console.error(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    getData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [paramsKey]); // Only depend on the serialized key

  return { blogs, loading, error };
}
