"use client";

import BlogList from "@/components/BlogList";

const metadata = {
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

export default function Page() {
  return <BlogList />;
}
