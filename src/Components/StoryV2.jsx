import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import story from "../Athlete/athleteStory";

export default function StoryV2() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full rounded-xl  bg-card p-6 shadow-sm">
      <div className="relative z-10 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center">
            <BookOpen className="mr-3 h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Athlete's Story
            </h2>
          </div>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-purple-500"></div>
        </div>

        <div className="overflow-hidden rounded-lg  bg-background shadow-sm">
          <div className="p-5">
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
                className="relative overflow-hidden"
              >
                <p className="text-foreground/90">{story.content}</p>

                {!isExpanded && (
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex w-full items-center justify-center border-t bg-muted/50 p-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {isExpanded ? (
              <>
                <span className="mr-2">Read less</span>
                <ChevronUp className="h-4 w-4 text-primary" />
              </>
            ) : (
              <>
                <span className="mr-2">Read more</span>
                <ChevronDown className="h-4 w-4 text-primary" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
