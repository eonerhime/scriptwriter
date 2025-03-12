import HomeContent from "@/components/HomeContent";
import profileImage from "../../public/IEO-2.png";

const btnStyle =
  "flex gap-2 w-40 py-3 border-2 border-primary-50  border-style:solid rounded-md uppercase font-bold justify-center align-middle";

export default function Page() {
  return <HomeContent profileImage={profileImage} />;
}
