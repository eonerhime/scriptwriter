"use client";

import { getContent } from "@/lib/data-services";
import { useEffect, useState } from "react";

export function useBlogs(slug, sortFilter = [], filterBy = {}) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // console.log("SORT FILTER:", sortFilter);
  // console.log("FILTER BY:", filterBy);

  const { value, status } = sortFilter.at(0);
  const filter = value.split("-").at(0);
  const sortBy = [{ filter, status }];

  // Memoize the key to prevent unnecessary re-fetches
  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      setLoading(true);
      setError("");

      try {
        const result = await getContent(slug, sortBy, filterBy);
        if (isMounted) {
          setBlogs(result);
        }
      } catch (err) {
        if (isMounted) {
          setError("Something went wrong fetching blogs.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [slug, JSON.stringify(sortFilter), JSON.stringify(filterBy)]);

  return { blogs, loading, error };
}
