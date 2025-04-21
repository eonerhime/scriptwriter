import ContactMe from "@/components/ContactMe";

// Shows on contact me only
export const metadata = {
  title: "Contact Me | Ifeoma Emo-Onerhime",
  description: "Contact Me page for Ifeoma Emo-Onerhime",
  keywords: [
    "scriptwriter",
    "Ifeoma Emo-Onerhime",
    "screenwriting",
    "script development",
    "portfolio",
  ],
};

export const dynamic = "force-dynamic";

export default function Page() {
  return <ContactMe />;
}
