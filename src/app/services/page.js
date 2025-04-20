import ServiceList from "@/components/ServiceList";
import { getContent } from "@/lib/data-services";

// Shows on Services only
export const metadata = {
  title: "Services | Ifeoma Emo-Onerhime",
};

export default async function Page() {
  // Fetch home content from supabase
  const serviceContent = await getContent("services", {
    value: "id",
    status: true,
  });

  return <ServiceList services={serviceContent} />;
}
