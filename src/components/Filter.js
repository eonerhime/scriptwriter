"use client";

import { useRouter, useSearchParams } from "next/navigation";

function Filter({ filterField, categories = [] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get(filterField) || categories.at(0);

  function handleChange(e) {
    const value = e.target.value;

    // If default is selected, do nothing
    if (!value) return;

    const params = new URLSearchParams(searchParams.toString());

    params.set("category", e.target.value || "");

    // Ensures page value is set to 1 if pagination and page details are passed in the searchParams
    if (params.get("page")) params.set("page", "1");

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex p-2 gap-2">
      <Select
        value={currentFilter}
        onChange={handleChange}
        categories={categories}
        type="white"
      />
    </div>
  );
}

export default Filter;

// Select element declaration
function Select({ categories, value, onChange, type = "default" }) {
  // Compute value to avoid hydration issues
  const textColor = type === "white" ? "text-gray-300" : "text-gray-500";

  return (
    <select
      // value={value}
      onChange={onChange}
      className={`text-lg px-2 py-1 border-1 border-primary-700 rounded-sm shadow-sm bg-primary-700 ${textColor}`}
    >
      <option value="all" className="bg-primary-700">
        Show all Categories
      </option>
      {categories.map((category) => (
        <option key={category} value={category} className="bg-primary-700">
          {category.slice(0, 1).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
}
