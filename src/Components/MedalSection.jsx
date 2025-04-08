import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award, Calendar, Trophy } from "lucide-react";
import { useState } from "react";

const CustomBadge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}
  >
    {children}
  </span>
);

const medalColors = {
  gold: "bg-gradient-to-br from-amber-100/90 to-amber-50/80 text-amber-800 border-amber-200/70 hover:from-amber-200/90 hover:to-amber-100/80 dark:from-amber-700/40 dark:to-amber-600/30 dark:text-amber-100 dark:border-amber-500/40 dark:hover:from-amber-600/50 dark:hover:to-amber-500/40",
  silver:
    "bg-gradient-to-br from-slate-100/90 to-slate-50/80 text-slate-800 border-slate-200/70 hover:from-slate-200/90 hover:to-slate-100/80 dark:from-slate-700/40 dark:to-slate-600/30 dark:text-slate-100 dark:border-slate-500/40 dark:hover:from-slate-600/50 dark:hover:to-slate-500/40",
  bronze:
    "bg-gradient-to-br from-orange-100/90 to-orange-50/80 text-orange-800 border-orange-200/70 hover:from-orange-200/90 hover:to-orange-100/80 dark:from-orange-700/40 dark:to-orange-600/30 dark:text-orange-100 dark:border-orange-500/40 dark:hover:from-orange-600/50 dark:hover:to-orange-500/40",
};

const medalIcons = {
  gold: <Trophy className="h-4 w-4 text-amber-500 dark:text-amber-300" />,
  silver: <Trophy className="h-4 w-4 text-slate-400 dark:text-slate-300" />,
  bronze: <Trophy className="h-4 w-4 text-orange-500 dark:text-orange-300" />,
};

export default function MedalSection({
  title,
  medals = [],
  isActive,
  onToggle,
}) {
  const [hoveredMedal, setHoveredMedal] = useState(null);
  const medalsArray = medals || [];

  if (medalsArray.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 group
        bg-white/20 dark:bg-slate-900/30
        backdrop-blur-md border border-white/30 dark:border-slate-700/50
        shadow-md shadow-blue-500/5 dark:shadow-blue-800/5 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-800/10
        text-slate-800 dark:text-slate-100
        hover:bg-white/30 dark:hover:bg-slate-800/40"
      >
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-blue-500 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-semibold">{title}</span>
          <CustomBadge className="ml-2 bg-blue-100/50 text-blue-600 border border-blue-200/50 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/50">
            {medalsArray.length}
          </CustomBadge>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-blue-500 dark:text-blue-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            // transition={{ duration: 0.2 }}
            className="mt-2 overflow-hidden"
          >
            {/* <div
              className="grid gap-2 p-3 rounded-xl
              bg-white/30 dark:bg-slate-900/30
              backdrop-blur-md border border-white/30 dark:border-slate-700/50
              shadow-md shadow-blue-500/5 dark:shadow-blue-800/5"
              > */}
            <div className="grid gap-2 rounded-lg bg-card p-4 shadow-sm">
              {medalsArray.map((medal, index) => (
                <motion.div
                  key={medal.id || index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: index * 0.2 }}
                  className={`flex items-center px-3 py-2 rounded-md cursor-pointer border transition-colors ${
                    medalColors[medal.type]
                  }`}
                  // onMouseEnter={() => setHoveredMedal(medal)}
                  // onMouseLeave={() => setHoveredMedal(null)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/60 dark:bg-slate-800/60 mr-2 shadow-sm border border-white/40 dark:border-slate-600/40">
                    {medalIcons[medal.type]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm leading-tight">
                      {medal.competition}
                    </h4>
                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{medal.year}</span>
                    </div>
                  </div>
                  <CustomBadge
                    className={`ml-2 border capitalize border-${
                      medal.type === "gold"
                        ? "amber"
                        : medal.type === "silver"
                        ? "slate"
                        : "orange"
                    }-200/50 dark:border-${
                      medal.type === "gold"
                        ? "amber"
                        : medal.type === "silver"
                        ? "slate"
                        : "orange"
                    }-700/40 bg-${
                      medal.type === "gold"
                        ? "amber"
                        : medal.type === "silver"
                        ? "slate"
                        : "orange"
                    }-100/40 dark:bg-${
                      medal.type === "gold"
                        ? "amber"
                        : medal.type === "silver"
                        ? "slate"
                        : "orange"
                    }-900/20 text-${
                      medal.type === "gold"
                        ? "amber"
                        : medal.type === "silver"
                        ? "slate"
                        : "orange"
                    }-700 dark:text-${
                      medal.type === "gold"
                        ? "amber"
                        : medal.type === "silver"
                        ? "slate"
                        : "orange"
                    }-300`}
                  >
                    {medal.type}
                  </CustomBadge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
