// import me1 from "../assets/me1.png";
// import me2 from "../assets/me2.png";
// import me3 from "../assets/me3.png";
// import me4 from "../assets/me4.png";
// import me5 from "../assets/me5.png";
import { useState, useEffect } from "react";
import images from "../Athlete/images";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-rotate doar când nu se hover
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div
      className="relative w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade effects pe margini */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900/40 to-transparent z-10 pointer-events-none" />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={{
            enter: (direction) => ({
              x: direction > 0 ? "100%" : "-100%",
              opacity: 0.5,
            }),
            center: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            },
            exit: (direction) => ({
              x: direction < 0 ? "100%" : "-100%",
              opacity: 0.5,
              transition: { duration: 0.5 },
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            // fill
            // priority
            // sizes="(max-width: 768px) 100vw, 80vw"
            // className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Butoane de navigare */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 transition-all duration-300"
        aria-label="Imaginea anterioară"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 transition-all duration-300"
        aria-label="Imaginea următoare"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicator de poziție */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Salt la imaginea ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
