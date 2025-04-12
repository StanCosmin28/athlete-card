import { motion } from "framer-motion";
// import sponsors from "../Athlete/sponsors";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useData } from "../Context/DataContext";
export default function Sponsors() {
  const { athleteData } = useData();
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
    // Set initial max scroll value
    if (scrollRef.current) {
      setMaxScroll(
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  }, []);

  if (!athleteData) return <p>Loading...</p>;

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
    <div
      className="flex flex-col justify-center p-6 rounded-2xl relative overflow-hidden
        bg-gradient-to-br from-white/40 to-white/20 dark:from-slate-900/40 dark:to-slate-900/20
        backdrop-blur-lg border border-white/30 dark:border-slate-700/50
        shadow-xl shadow-blue-500/10 dark:shadow-blue-800/10"
    >
      {/* Decorative elements */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-100 flex items-center">
              <Award className="h-6 w-6 mr-3 text-blue-500 dark:text-blue-400" />
              Sponsors
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          {maxScroll > 0 && (
            <div className="flex space-x-2">
              <button
                onClick={scrollLeft}
                disabled={scrollPosition <= 0}
                className={`p-2 rounded-full 
                  ${
                    scrollPosition <= 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-white/30 dark:hover:bg-slate-800/50"
                  } 
                  bg-white/20 dark:bg-slate-800/30 backdrop-blur-md border border-white/30 dark:border-slate-700/50
                  transition-all duration-300`}
              >
                <ChevronLeft
                  size={20}
                  className="text-slate-700 dark:text-slate-200"
                />
              </button>
              <button
                onClick={scrollRight}
                disabled={scrollPosition >= maxScroll}
                className={`p-2 rounded-full 
                  ${
                    scrollPosition >= maxScroll
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-white/30 dark:hover:bg-slate-800/50"
                  } 
                  bg-white/20 dark:bg-slate-800/30 backdrop-blur-md border border-white/30 dark:border-slate-700/50
                  transition-all duration-300`}
              >
                <ChevronRight
                  size={20}
                  className="text-slate-700 dark:text-slate-200"
                />
              </button>
            </div>
          )}
        </div>

        <div className="relative">
          {/* Main scrolling container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide gap-4 py-3 px-1 scroll-smooth"
          >
            {athleteData.sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex-shrink-0" // Removed group class
              >
                <div
                  className="flex flex-col items-center justify-center w-28 h-32 rounded-lg overflow-hidden
        bg-white/40 dark:bg-slate-800/40 backdrop-blur-md
        border border-white/40 dark:border-slate-700/50
        shadow-md shadow-blue-500/5 dark:shadow-blue-800/5
        transition-all duration-300 relative"
                >
                  <div className="w-full h-20 flex items-center justify-center p-2">
                    <div
                      className="w-full h-full bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${sponsor.logo})`,
                      }}
                    />
                  </div>

                  {/* Name badge - always visible */}
                  <div className="w-full bg-black/70 dark:bg-black/80 py-1.5 px-2">
                    <p className="text-white text-xs font-medium text-center truncate">
                      {sponsor.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left fade gradient - only show if there's scroll */}
          {scrollPosition > 0 && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/40 to-transparent dark:from-slate-900/40 dark:to-transparent"></div>
          )}

          {/* Right fade gradient - only show if not at end */}
          {scrollPosition < maxScroll && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/40 to-transparent dark:from-slate-900/40 dark:to-transparent"></div>
          )}
        </div>
      </div>
    </div>
  );
}
