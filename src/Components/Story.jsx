import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import story from "../Athlete/athleteStory";
export default function StorySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col justify-center p-4 rounded-lg shadow-md relative">
      <h2 className="text-2xl font-bold pb-2 text-left">Athlete's Story</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 relative">
        <div className="p-4 relative">
          <AnimatePresence initial={false}>
            <motion.div
              key="content"
              initial="collapsed"
              animate={isExpanded ? "expanded" : "collapsed"}
              exit="collapsed"
              variants={{
                expanded: { height: "auto" },
                collapsed: { height: "100px" },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden relative"
            >
              <p className="text-gray-700 dark:text-gray-300">
                {story.content}
              </p>

              {/* Fade overlay - only visible when collapsed */}
              {!isExpanded && (
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-3 flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 transition-colors"
        >
          {isExpanded ? (
            <>
              <span className="mr-2">Read less</span>
              <ChevronUp size={20} />
            </>
          ) : (
            <>
              <span className="mr-2">Read more</span>
              <ChevronDown size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
