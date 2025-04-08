import { motion } from "framer-motion";
import sponsors from "../Athlete/sponsors";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Sponsors() {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const current = scrollRef.current.scrollLeft;
      const max = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      setScrollPosition(current);
      setMaxScroll(max);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      setMaxScroll(
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full rounded-xl bg-card p-6 shadow-sm">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Sponsors
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-purple-500"></div>
            </div>
          </div>

          {maxScroll > 0 && (
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                disabled={scrollPosition <= 0}
                className={`rounded-full p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  scrollPosition <= 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-accent"
                }`}
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={scrollRight}
                disabled={scrollPosition >= maxScroll}
                className={`rounded-full p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  scrollPosition >= maxScroll
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-accent"
                }`}
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </div>
          )}
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide gap-4 py-3 px-1 scroll-smooth"
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="flex-shrink-0 group"
              >
                <div className="relative flex h-28 w-28 flex-col items-center justify-center overflow-hidden rounded-lg bg-background hover:shadow-sm transition-all duration-300">
                  <div className="flex h-full w-full items-center justify-center p-2">
                    <div
                      className="h-full w-full bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${sponsor.logo})` }}
                    />
                  </div>

                  <div className="absolute bottom-0 w-full translate-y-full transform bg-black/80 py-1.5 px-2 text-center backdrop-blur-md transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    <p className="truncate text-xs font-medium text-white">
                      {sponsor.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {scrollPosition > 0 && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent"></div>
          )}

          {scrollPosition < maxScroll && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent"></div>
          )}
        </div>
      </div>
    </div>
  );
}
