import ServiceList from "@/components/ServiceList";
import { getContent } from "@/lib/data-services";

// Shows on Services only
export const metadata = {
  title: "Services | Ifeoma Emo-Onerhime",
  description: "List of services offere by Ifeoma Emo-Onerhime",
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
  const serviceContent = await getContent("services", sortBy);

  return <ServiceList services={serviceContent} />;
}
