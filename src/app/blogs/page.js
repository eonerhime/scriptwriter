import BlogList from "@/components/BlogList";
import { getContent } from "@/lib/data-services";

// Shows on Blog only
export const metadata = {
  title: "Blog | Ifeoma Emo-Onerhime",
};

export default async function Page() {
  const blogs = await getContent("blog", {
    value: "created_at",
    status: false,
  });

  return <BlogList blogList={blogs} />;
}
