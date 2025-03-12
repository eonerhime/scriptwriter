import profileImage from "../../../public/ifeoma.png";
import AboutContent from "@/components/AboutContent";

// Shows on About only
const metadata = {
  title: "About | Ifeoma Emo-Onerhime",
};

export default function Page() {
  return <AboutContent profileImage={profileImage} />;
}
