import BlogList from "@/components/BlogList";
import { getContent } from "@/lib/data-services";

// Shows on Blog only
export const metadata = {
  title: "Blog | Ifeoma Emo-Onerhime",
  description: "Published blogs by Ifeoma Emo-Onerhime",
  keywords: [
    "scriptwriter",
    "Ifeoma Emo-Onerhime",
    "screenwriting",
    "script development",
    "portfolio",
  ],
};

export const dynamic = "force-dynamic";

export default async function Page() {
  const blogContent = await getContent("blog", {
    value: "created_at",
    status: false,
  });

  return <BlogList blogList={blogContent} />;
}
