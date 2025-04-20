import GalleryList from "@/components/GalleryList";
import { getContent } from "@/lib/data-services";

export default async function Page() {
  // Fetch home content from supabase
  const galleryImages = await getContent("gallery", {
    value: "id",
    status: true,
  });

  return <GalleryList galleryImages={galleryImages} />;
}
