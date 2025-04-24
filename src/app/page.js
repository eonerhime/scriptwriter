import HomeContent from "@/components/HomeContent";
import {
  getContent,
  getLatestBlog,
  getTestimonials,
} from "@/lib/data-services";

export const metadata = {
  title: "Ifeoma Emo-Onerhime | Scriptwriter",
  description:
    "Professional scriptwriting portfolio and services by Ifeoma Emo-Onerhime",
  keywords: [
    "scriptwriter",
    "Ifeoma Emo-Onerhime",
    "screenwriting",
    "script development",
    "portfolio",
  ],
  openGraph: {
    title: "Ifeoma Emo-Onerhime | Scriptwriter",
    description:
      "Professional scriptwriting portfolio and services by Ifeoma Emo-Onerhime",
    url: "https://scriptwriter-theta.vercel.app",
    images: [
      {
        url: "https://scriptwriter-theta.vercel.app/ieo-2.png",
        alt: "Ifeoma Emo-Onerhime Scriptwriter",
      },
    ],
  },
};

export const dynamic = "force-dynamic";

export default async function Page() {
  const sortBy = { value: "id", status: true };

  // Fetch home content from supabase
  const homeContent = await getContent("home", sortBy);

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
