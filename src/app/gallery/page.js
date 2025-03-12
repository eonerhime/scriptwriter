import pic01 from "@/assets/gallery/01.jpg";
import pic02 from "@/assets/gallery/02.jpg";
import pic03 from "@/assets/gallery/03.jpg";
import pic04 from "@/assets/gallery/04.jpg";
import pic05 from "@/assets/gallery/05.jpg";
import pic06 from "@/assets/gallery/06.jpg";
import pic07 from "@/assets/gallery/07.jpg";
import pic08 from "@/assets/gallery/08.jpg";
import pic09 from "@/assets/gallery/09.jpg";
import pic10 from "@/assets/gallery/10.jpg";
import pic11 from "@/assets/gallery/11.jpg";
import pic12 from "@/assets/gallery/12.jpg";
import pic13 from "@/assets/gallery/13.jpg";
import pic14 from "@/assets/gallery/14.jpg";
import pic15 from "@/assets/gallery/15.jpg";
import pic16 from "@/assets/gallery/16.jpg";
import pic17 from "@/assets/gallery/17.jpg";
import pic18 from "@/assets/gallery/18.jpg";
import pic19 from "@/assets/gallery/19.jpg";
import pic20 from "@/assets/gallery/20.jpg";

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
