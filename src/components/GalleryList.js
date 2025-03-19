"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery({ galleryImages }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].img);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const showNext = () => {
    if (currentIndex !== null && currentIndex < galleryImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(galleryImages[currentIndex + 1].img);
    }
  };

  const showPrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(galleryImages[currentIndex - 1].img);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, showNext]);

  // Pagination Logic
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const paginatedImages = galleryImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <motion.div
      className="mt-36 mb-12 text-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Title & Description */}
      <motion.h2
        className="uppercase font-bold text-2xl mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ifeoma&apos;s Gallery
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        This is a collection of pictures from movie premieres of movies she has
        written.
      </motion.p>

      {/* Gallery Grid */}
      <motion.div
        className="grid max-w-[1200px] mx-auto px-4 grid-cols-1 auto-rows-auto gap-12 w-full h-full mt-12 min-[601px]:grid-cols-2 min-[840px]:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {paginatedImages.map((gal, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => openModal(index)}
          >
            <Image
              src={gal.img}
              alt={`Gallery ${index}`}
              width={400}
              height={300}
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <motion.button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          whileHover={{ scale: 1.1 }}
        >
          ◀ Previous
        </motion.button>
        <span className="text-lg text-white">
          {currentPage} / {totalPages}
        </span>
        <motion.button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          whileHover={{ scale: 1.1 }}
        >
          Next ▶
        </motion.button>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-primary-950 bg-opacity-80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-0 text-primary-50 text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>

              {/* Image */}
              <Image
                src={selectedImage}
                alt="Selected"
                width={400}
                height={300}
                className="rounded-lg"
              />

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                <motion.button
                  onClick={showPrev}
                  disabled={currentIndex === 0}
                  className="text-white text-xl px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
                  whileHover={{ scale: 1.1 }}
                >
                  ◀ Prev
                </motion.button>
                <motion.button
                  onClick={showNext}
                  disabled={currentIndex === galleryImages.length - 1}
                  className="text-white text-xl px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
                  whileHover={{ scale: 1.1 }}
                >
                  Next ▶
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
