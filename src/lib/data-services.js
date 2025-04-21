"use server";

import supabase from "./supabase";

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
export async function getContent(slug, filter) {
  const { data, error } = await supabase
    .from(slug)
    .select("*")
    .order(filter.value, { ascending: filter.status });

  if (error) {
    console.error(error);
    throw new Error(
      `${
        slug.charAt(0).toUpperCase() + slug.slice(1)
      } page content could not be loaded`
    );
  }

  return data;
}

// Handles fetch query for all tables in supabase
export async function getTestimonials() {
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
