import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Button from "@/components/Button";
import Link from "next/link";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: {
    template: "Ifeoma Emo-Onerhime - %s",
    default: "Welcome - Ifeoma Emo-Onerhime",
  },
  description:
    "A freelance writer based in #Lagos. I make visual your movie, sitcom, TV series, and documentary ideas",
};

const btnStyle =
  "hidden gap-2 min-[700px]:flex w-28 py-3 border-2 border-primary-50 rounded-md uppercase font-bold justify-center align-middle fixed bottom-6 right-6 z-30 bg-primary-400 text-primary-50 hover:bg-accent-950 transition-all";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-primary-500 text-primary-50 min-w-full min-h-screen flex flex-col px-8 relative min-[601px]:px-20 box-border`}
      >
        <Header />

        <div className="flex-1 max-w-7xl">
          <main className=" w-[95%] mx-auto">
            {children}
            <Button btnStyle={btnStyle}>
              <Link href="/contact">get in touch</Link>
            </Button>
          </main>
        </div>
      </body>
    </html>
  );
}
