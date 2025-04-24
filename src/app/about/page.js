import AboutContent from "@/components/AboutContent";
import { getContent } from "@/lib/data-services";

// Shows on About only
export const metadata = {
  title: "About | Ifeoma Emo-Onerhime",
  description:
    "Information about professional scriptwriting portfolio and services by Ifeoma Emo-Onerhime",
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
  const sortBy = { value: "id", status: true };

  // Fetch home content from supabase
  const aboutContent = await getContent("about", sortBy);

  return <AboutContent aboutContent={aboutContent} />;
}
