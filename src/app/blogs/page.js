"use client";

import BlogList from "@/components/BlogList";
import Spinner from "@/components/Spinner";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "all";
  const sortBy = searchParams.get("sortBy") || "id-asc";

  return (
    <Suspense fallback={<Spinner />}>
      <BlogList category={category} sortBy={sortBy} />
    </Suspense>
  );
}
