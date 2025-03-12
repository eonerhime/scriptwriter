import ServiceList from "@/components/ServiceList";
import {
  TvIcon,
  FilmIcon,
  PencilIcon,
  AcademicCapIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

// Shows on Services only
export const metadata = {
  title: "Services | Ifeoma Emo-Onerhime",
};

const services = [
  {
    title: "Script for Television",
    icon: <TvIcon className="h-12 w-12 text-primary-50" />,
  },
  {
    title: "Script for Film",
    icon: <FilmIcon className="h-12 w-12 text-primary-50" />,
  },
  {
    title: "Script Editing",
    icon: <PencilIcon className="h-12 w-12 text-primary-50" />,
  },
  {
    title: "Script Consulting",
    icon: <AcademicCapIcon className="h-12 w-12 text-primary-50" />,
  },
  {
    title: "Content Writing",
    icon: <PencilSquareIcon className="h-12 w-12 text-primary-50" />,
  },
];

export default function Page() {
  return <ServiceList services={services} />;
}
