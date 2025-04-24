"use client";

import { getBlogCategory } from "@/lib/data-services";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import SortBy from "./SortBy";

function FilterSortOperations() {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "all";
  const currentSort = searchParams.get("sortBy") || "id-asc";

  useEffect(() => {
    async function getData() {
      setError("");

      try {
        const data = await getBlogCategory();

        // Extract unique categories only
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];

        setCategories(uniqueCategories);
      } catch (err) {
        setError("Something went wrong fetching blog categories.");
        console.error(error);
      }
    }

    getData();
  }, [setCategories, setError, error]);

  return (
    <div className="w-fit flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-6 pb-2 sm:pb-0 mt-8 pr-2 rounded-md">
      <Filter currentCategory={currentCategory} categories={categories} />

      <SortBy
        currentSort={currentSort}
        options={[
          { value: "title-asc", label: "A - Z" },
          { value: "title-desc", label: "Z - A" },
          { value: "created_at-asc", label: "Sort by date (earlier first)" },
          { value: "created_at-desc", label: "Sort by date (recent first)" },
        ]}
      />
    </div>
  );
}

export default FilterSortOperations;
