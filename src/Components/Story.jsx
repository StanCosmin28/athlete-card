import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import story from "../Athlete/athleteStory";

export default function StorySection() {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div className="text-left mb-6">
          <h2 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-100 flex items-center">
            <BookOpen className="h-6 w-6 mr-3 text-blue-500 dark:text-blue-400" />
            Athlete's Story
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div
          className="rounded-xl overflow-hidden relative
          bg-white/50 dark:bg-slate-800/50
          backdrop-blur-sm border border-white/40 dark:border-slate-700/60
          shadow-lg shadow-blue-500/5 dark:shadow-blue-800/5"
        >
          <div className="p-5 relative">
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
                <p className="text-slate-700 dark:text-slate-300">
                  {story.content}
                </p>

                {/* Fade overlay - only visible when collapsed */}
                {!isExpanded && (
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 dark:from-slate-800/90 to-transparent"></div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-3 flex items-center justify-center 
              bg-gradient-to-r from-blue-500/10 to-purple-500/10 
              hover:from-blue-500/20 hover:to-purple-500/20
              dark:from-blue-900/30 dark:to-purple-900/30
              dark:hover:from-blue-900/40 dark:hover:to-purple-900/40
              text-slate-700 dark:text-slate-200 
              border-t border-white/20 dark:border-slate-700/60
              backdrop-blur-sm transition-all"
          >
            {isExpanded ? (
              <>
                <span className="mr-2 font-medium">Read less</span>
                <ChevronUp
                  size={20}
                  className="text-blue-500 dark:text-blue-400"
                />
              </>
            ) : (
              <>
                <span className="mr-2 font-medium">Read more</span>
                <ChevronDown
                  size={20}
                  className="text-blue-500 dark:text-blue-400"
                />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
