import PortfolioList from "@/components/PortfolioList";
import { getContent } from "@/lib/data-services";

// Shows on Portfolio only
export const metadata = {
  title: "Portfolio | Ifeoma Emo-Onerhime",
  description:
    "Portfolio of finished feature films and series by Ifeoma Emo-Onerhime",
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

  // Fetch portfolio content from supabase
  const portfolioContent = await getContent("portfolio", sortBy);

  return <PortfolioList portfolio={portfolioContent} />;
}
