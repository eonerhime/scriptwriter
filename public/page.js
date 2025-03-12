// import pic01 from "../../public/gallery/edited/01.jpg";
// import pic02 from "../../public/gallery/edited/02.jpg";
// import pic03 from "../../public/gallery/edited/03.jpg";
// import pic04 from "../../public/gallery/edited/04.jpg";
// import pic05 from "../../public/gallery/edited/05.jpg";
// import pic06 from "../../public/gallery/edited/06.jpg";
// import pic07 from "../../public/gallery/edited/07.jpg";
// import pic08 from "../../public/gallery/edited/08.jpg";
// import pic09 from "../../public/gallery/edited/09.jpg";
// import pic10 from "../../public/gallery/edited/10.jpg";
// import pic11 from "../../public/gallery/edited/11.jpg";
// import pic12 from "../../public/gallery/edited/12.jpg";
// import pic13 from "../../public/gallery/edited/13.jpg";
// import pic14 from "../../public/gallery/edited/14.jpg";
// import pic15 from "../../public/gallery/edited/15.jpg";
// import pic16 from "../../public/gallery/edited/16.jpg";
// import pic17 from "../../public/gallery/edited/17.jpg";
// import pic18 from "../../public/gallery/edited/18.jpg";
// import pic19 from "../../public/gallery/edited/19.jpg";
// import pic20 from "../../public/gallery/edited/20.jpg";
import Image from "next/image";

// Shows on Gallery only
export const metadata = {
  title: "Gallery | Ifeoma Emo-Onerhime",
};

const galleryImages = [
  "https://picsum.photos/id/35/600/400",
  "https://picsum.photos/id/47/600/400",
  "https://picsum.photos/id/57/600/400",
  "https://picsum.photos/id/75/600/400",
  "https://picsum.photos/id/84/600/400",
  "https://picsum.photos/id/27/600/400",
  "https://picsum.photos/id/38/600/400",
  "https://picsum.photos/id/49/600/400",
  "https://picsum.photos/id/55/600/400",
  "https://picsum.photos/id/76/600/400",
  "https://picsum.photos/id/83/600/400",
  "https://picsum.photos/id/29/600/400",
  "https://picsum.photos/id/22/600/400",
  "https://picsum.photos/id/39/600/400",
  "https://picsum.photos/id/50/600/400",
  "https://picsum.photos/id/56/600/400",
  "https://picsum.photos/id/77/600/400",
  "https://picsum.photos/id/89/600/400",
  "https://picsum.photos/id/230/600/400",
];

// const galleryImages = [
//   {
//     img: pic01,
//   },
//   {
//     img: pic02,
//   },
//   {
//     img: pic03,
//   },
//   {
//     img: pic04,
//   },
//   {
//     img: pic05,
//   },
//   {
//     img: pic06,
//   },
//   {
//     img: pic07,
//   },
//   {
//     img: pic08,
//   },
//   {
//     img: pic09,
//   },
//   {
//     img: pic10,
//   },
//   {
//     img: pic11,
//   },
//   {
//     img: pic12,
//   },
//   {
//     img: pic13,
//   },
//   {
//     img: pic14,
//   },
//   {
//     img: pic15,
//   },
//   {
//     img: pic16,
//   },
//   {
//     img: pic17,
//   },
//   {
//     img: pic18,
//   },
//   {
//     img: pic19,
//   },
//   {
//     img: pic20,
//   },
// ];

export default function Page() {
  return (
    <div className="mt-12 mb-12 text-start">
      <div className="mt-12 mb-12">
        {/* Animated Title & Description */}
        <h2 className="uppercase font-bold text-2xl mb-2">
          Ifeoma&apos;s Gallery
        </h2>

        <p>
          This is a collection of pictures from movie premieres of movies she
          has written.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-[1fr] auto-rows-auto  gap-12 w-full h-full mt-12 min-[601px]:grid-cols-[1fr_1fr] min-[840px]:grid-cols-[1fr_1fr_1fr] aspect-1/2">
        {galleryImages.map((gal, index) => (
          <div key={index} className="cursor-pointer">
            <Image
              src={gal}
              alt={`Gallery ${index}`}
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
