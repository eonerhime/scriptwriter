import BlogList from "@/components/BlogList";

// Shows on Blog only
export const metadata = {
  title: "Blog | Ifeoma Emo-Onerhime",
};

const posts = [
  { title: "In the beginning", image: "https://picsum.photos/id/35/300/200" },
  { title: "He said", image: "https://picsum.photos/id/47/300/200" },
  { title: "Fear not", image: "https://picsum.photos/id/57/300/200" },
  { title: "I am with you", image: "https://picsum.photos/id/75/300/200" },
  { title: "Now and Always", image: "https://picsum.photos/id/84/300/200" },
  { title: "Just Believe", image: "https://picsum.photos/id/27/300/200" },
];

export default function Page() {
  return <BlogList posts={posts} />;
}
