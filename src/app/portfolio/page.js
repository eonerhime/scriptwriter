import PortfolioList from "@/components/PortfolioList";
import { getContent } from "@/lib/data-services";

// Shows on Portfolio only
export const metadata = {
  title: "Portfolio | Ifeoma Emo-Onerhime",
};

export default async function Page() {
  // Fetch portfolio content from supabase
  const portfolioContent = await getContent("portfolio", {
    value: "id",
    status: true,
  });

  return <PortfolioList portfolio={portfolioContent} />;
}
