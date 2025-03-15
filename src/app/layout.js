import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import FloatingButton from "@/components/FloatingButton";
import Footer from "@/components/Footer";

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
    "A scriptwriter based in #Lagos. I make visual your movie, sitcom, TV series, and documentary ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-primary-500 text-primary-50 min-w-full min-h-screen flex flex-col relative min-[601px]:px-8 box-border`}
      >
        <Header />

        <div className="flex-1 flex flex-col w-full h-full">
          <main className="mx-auto flex-grow flex flex-col justify-between w-full max-w-7xl px-4">
            {children}
          </main>
        </div>

        <Footer />

        <FloatingButton />
      </body>
    </html>
  );
}
