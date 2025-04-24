"use client";

import { useRouter, useSearchParams } from "next/navigation";

function Filter({ currentCategory, categories = [] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(key, value) {
    // If default is selected, do nothing
    if (!key || !value) return;

    const params = new URLSearchParams(searchParams.toString());

    params.set(key, value);

    // Ensures page value is reset to 1 if page number > 1 and page details are passed in the URL
    if (params.get("page")) params.set("page", "1");

    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex p-2 gap-2">
      <Select
        value={currentCategory}
        onChange={(e) => handleChange("category", e.target.value)}
        categories={categories}
        type="white"
      />
    </div>
  );
}

export default Filter;

// Select element declaration
function Select({ defaultValue, onChange, categories, type = "default" }) {
  // Compute value to avoid hydration issues
  const textColor = type === "white" ? "text-gray-300" : "text-gray-500";

  return (
    <select
      value={defaultValue}
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
