import pic01 from "../../../public/gallery/01.jpg";
import pic02 from "../../../public/gallery/02.jpg";
import pic03 from "../../../public/gallery/03.jpg";
import pic04 from "../../../public/gallery/04.jpg";
import pic05 from "../../../public/gallery/05.jpg";
import pic06 from "../../../public/gallery/06.jpg";
import pic07 from "../../../public/gallery/07.jpg";
import pic08 from "../../../public/gallery/08.jpg";
import pic09 from "../../../public/gallery/09.jpg";
import pic10 from "../../../public/gallery/10.jpg";
import pic11 from "../../../public/gallery/11.jpg";
import pic12 from "../../../public/gallery/12.jpg";
import pic13 from "../../../public/gallery/13.jpg";
import pic14 from "../../../public/gallery/14.jpg";
import pic15 from "../../../public/gallery/15.jpg";
import pic16 from "../../../public/gallery/16.jpg";
import pic17 from "../../../public/gallery/17.jpg";
import pic18 from "../../../public/gallery/18.jpg";
import pic19 from "../../../public/gallery/19.jpg";
import pic20 from "../../../public/gallery/20.jpg";

import GalleryList from "@/components/GalleryList";

const galleryImages = [
  {
    img: pic01,
  },
  {
    img: pic02,
  },
  {
    img: pic03,
  },
  {
    img: pic04,
  },
  {
    img: pic05,
  },
  {
    img: pic06,
  },
  {
    img: pic07,
  },
  {
    img: pic08,
  },
  {
    img: pic09,
  },
  {
    img: pic10,
  },
  {
    img: pic11,
  },
  {
    img: pic12,
  },
  {
    img: pic13,
  },
  {
    img: pic14,
  },
  {
    img: pic15,
  },
  {
    img: pic16,
  },
  {
    img: pic17,
  },
  {
    img: pic18,
  },
  {
    img: pic19,
  },
  {
    img: pic20,
  },
];

export default function Page() {
  return <GalleryList galleryImages={galleryImages} />;
}
