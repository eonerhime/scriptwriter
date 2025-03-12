import PortfolioList from "@/components/PortfolioList";

// Shows on Portfolio only
export const metadata = {
  title: "Portfolio | Ifeoma Emo-Onerhime",
};

const portfolio = [
  { image: "/portfolio/scarred.jpg" },
  { image: "/portfolio/misan.jpg" },
  { image: "/portfolio/soul_sistas.jpg" },
  { image: "/portfolio/mr_wonderful.jpg" },
  { image: "/portfolio/stimulus.jpg" },
  { image: "/portfolio/the_johnsons.jpg" },
  { image: "/portfolio/mafialliance.jpg" },
];

export default function Page() {
  return <PortfolioList portfolio={portfolio} />;
}
