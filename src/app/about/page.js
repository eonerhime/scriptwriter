import AboutContent from "@/components/AboutContent";
import { getContent } from "@/lib/data-services";

// Shows on About only
export const metadata = {
  title: "About | Ifeoma Emo-Onerhime",
};

export default async function Page() {
  // Fetch home content from supabase
  const aboutContent = await getContent("about", {
    value: "id",
    status: true,
  });

  return <AboutContent abouContentt={aboutContent} />;
}
