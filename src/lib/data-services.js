"use server";

import { getSupabaseClient } from "./supabase";

/*
  // Set filter condition based on slug
  // For "blog", sort by created_at in descending order
  // For others, sort by id in ascending order
  filter =
    slug === "blog"
      ? { value: "created_at", status: false }
      : { value: "id", status: true };

*/

// Handles fetch query for all tables in supabase
export async function getContent(
  slug,
  filter = {},
  filterBy = {},
  sortBy = []
) {
  const supabase = getSupabaseClient();

  let query = supabase.from(slug).select("*");

  // Apply dynamic filtering
  if (filterBy)
    Object.entries(filterBy).forEach(([category, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        query = query.eq(category, value);
      }
    });

  // Apply dynamic sorting: supports multiple sort fields
  if (Array.isArray(sortBy) && sortBy.length > 0) {
    sortBy.forEach(({ value, status }) => {
      if (value) query = query.order(value, { status });
    });
  } else if (filter?.value) {
    // fallback to legacy filter-style sorting
    query = query.order(filter.value, { ascending: filter.status ?? true });
  }

  const { data, error } = await query;

  console.log("DATA:", data);

  if (error) {
    console.error(error);
    throw new Error(
      `${slug.charAt(0).toUpperCase() + slug.slice(1)} page content could not be loaded`
    );
  }

  return data;
}

export async function getBlogCategory() {
  // Ensure Supabase connection is valid
  const supabase = getSupabaseClient();

  // Fetch data from the specified table (slug) with the provided filter
  // and order it based on the filter condition
  const { data, error } = await supabase.from("blog").select("category");

  if (error) {
    console.error(error);
    throw new Error("Blog categories could not be loaded");
  }

  return data;
}

// Handles fetch query for all tables in supabase
export async function getTestimonials() {
  // Ensure Supabase connection is valid
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("id", true);

  if (error) {
    console.error(error);
    throw new Error(`Testimonials page content could not be loaded`);
  }

  return data;
}

// Handles fetch query for latest blog in supabase
export async function getLatestBlog() {
  // Ensure Supabase connection is valid
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    console.error(error);
    throw new Error(`Latest blog content could not be loaded`);
  }

  return data;
}

// Test function
async function fetchData() {
  const data = await getContent(
    "blog",
    { value: "created_at", status: false },
    null
  );
  if (!data) {
    console.log("No data found");
    return;
  }

  console.log("FETCHED DATA", data);
}

// fetchData();
