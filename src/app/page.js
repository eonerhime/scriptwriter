import HomeContent from "@/components/HomeContent";
import {
  getContent,
  getLatestBlog,
  getTestimonials,
} from "@/lib/data-services";

export default async function Page() {
  // Fetch home content from supabase
  const homeContent = await getContent("home", {
    value: "id",
    status: true,
  });

  // Fetch testimonials content from supabase
  const testimonialsContent = await getTestimonials("testimonials");

  // Fetch latest blog content from supabase
  const latestBlogContent = await getLatestBlog();

  return (
    <HomeContent
      home={homeContent}
      testimonials={testimonialsContent}
      blog={latestBlogContent}
    />
  );
}
