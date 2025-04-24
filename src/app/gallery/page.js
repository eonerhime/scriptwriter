import GalleryList from "@/components/GalleryList";
import { getContent } from "@/lib/data-services";

// Shows on gallery only
export const metadata = {
  title: "Gallery | Ifeoma Emo-Onerhime",
  description: "Photo gallery of events attended by Ifeoma Emo-Onerhime",
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
  const galleryImages = await getContent("gallery", sortBy);

  return <GalleryList galleryImages={galleryImages} />;
}
