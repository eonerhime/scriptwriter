"use client";

import { useRouter, useSearchParams } from "next/navigation";

function SortBy({ options = [] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortBy = searchParams.get("sortBy") || "newest";

  function handleChange(e) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sortBy", e.target.value || "");

    router.push(`?${params.toString()}`);
  }

  return (
    <Select
      value={sortBy}
      onChange={handleChange}
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
      className={`text-lg px-2 py-1 border-1 border-primary-700 rounded-sm shadow-sm bg-primary-700 ${textColor}`}
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
