"use client";

import { useEffect, useState } from "react";
import Filter from "./Filter";
import SortBy from "./SortBy";
import { getBlogCategory } from "@/lib/data-services";

function FilterSortOperations() {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState();

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
    <div className="bg-primary-400 w-fit flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-6 pb-2 sm:pb-0 mt-8 pr-2 rounded-md">
      <Filter filterField="category" categories={categories} />

      <SortBy
        options={[
          { value: "created_at-asc", label: "Sort by date (earlier first)" },
          { value: "created_at-desc", label: "Sort by date (recent first)" },
          { value: "id-asc", label: "A - Z" },
          { value: "id-desc", label: "Z - A" },
        ]}
      />
    </div>
  );
}

export default FilterSortOperations;
