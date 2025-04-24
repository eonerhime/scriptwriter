"use client";

import { useRouter, useSearchParams } from "next/navigation";

function SortBy({ currentSort, options = [] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleChange(key, value) {
    // If default is selected, do nothing
    if (!key || !value) return;

    const params = new URLSearchParams(searchParams.toString());

    params.set(key, value);

    // Ensures page value is set to 1 if pagination and page details are passed in the searchParams
    if (params.get("page")) params.set("page", "1");

    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <Select
      value={currentSort}
      onChange={(e) => handleChange("sortBy", e.target.value)}
      options={options}
      type="white"
    />
  );
}

export default SortBy;

function Select({ options, value, onChange, type = "default" }) {
  // Compute value to avoid hydration issues
  const textColor = type === "white" ? "text-gray-300" : "text-gray-500";

  return (
    <select
      value={value}
      onChange={onChange}
      className={`text-lg px-2 py-1 border-1 border-primary-700 rounded-sm shadow-sm bg-primary-950 ${textColor}`}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="bg-primary-700"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
