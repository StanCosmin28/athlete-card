import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award, Calendar, Trophy } from "lucide-react";
import "../index.css";
import { useState } from "react";

const CustomBadge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}
  >
    {children}
  </span>
);

const medalVariants = {
  gold: {
    bg: "bg-amber-50 dark:bg-amber-900/40",
    text: "text-amber-900 dark:text-amber-50",
    border: "border-amber-200 dark:border-amber-800",
    hover: "hover:bg-amber-100 dark:hover:bg-amber-800/60",
  },
  silver: {
    bg: "bg-slate-50 dark:bg-slate-900/40",
    text: "text-slate-900 dark:text-slate-50",
    border: "border-slate-200 dark:border-slate-800",
    hover: "hover:bg-slate-100 dark:hover:bg-slate-800/60",
  },
  bronze: {
    bg: "bg-orange-50 dark:bg-orange-900/40",
    text: "text-orange-900 dark:text-orange-50",
    border: "border-orange-200 dark:border-orange-800",
    hover: "hover:bg-orange-100 dark:hover:bg-orange-800/60",
  },
};

const medalIcons = {
  gold: <Trophy className="h-5 w-5 text-amber-600 dark:text-amber-300" />,
  silver: <Trophy className="h-5 w-5 text-slate-500 dark:text-slate-300" />,
  bronze: <Trophy className="h-5 w-5 text-orange-600 dark:text-orange-300" />,
};

export default function MedalSection({
  title,
  medals = [],
  isActive,
  onToggle,
}) {
  const medalsArray = medals || [];
  if (medalsArray.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 w-full"
    >
      <button
        onClick={onToggle}
        className="cursor-pointer border-styleV2 flex w-full items-center justify-between rounded-lg bg-card p-4 text-card-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5" />
          <span className="font-medium">{title}</span>
          <CustomBadge className="border-transparent bg-muted text-muted-foreground">
            {medalsArray.length}
          </CustomBadge>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 overflow-hidden"
          >
            <div className="grid gap-2 rounded-lg bg-card p-4 shadow-sm">
              {medalsArray.map((medal, index) => {
                const variant = medalVariants[medal.type];
                return (
                  <motion.div
                    key={medal.id || index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.2 }}
                    className={`flex items-center transform-color rounded-md border cursor-pointer p-3 ${variant.bg} ${variant.border} ${variant.hover} ${variant.text}`}
                    // whileHover={{ scale: 1.01 }}
                  >
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-sm">
                      {medalIcons[medal.type]}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">
                        {medal.competition}
                      </h4>
                      <div className="md:mt-1 gap-1 flex flex-col items-left text-xs text-muted-foreground">
                        <div className="flex">
                          <span>{medal.location}</span>
                        </div>
                        <div className="flex">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{medal.year}</span>
                        </div>
                      </div>
                    </div>
                    <CustomBadge
                      className={`${variant.border} bg-background ${variant.text}`}
                    >
                      {medal.type}
                    </CustomBadge>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
