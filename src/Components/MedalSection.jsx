import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award, Calendar, Trophy } from "lucide-react";
import { useState } from "react";

const CustomBadge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border-[1px] px-2.5 py-0.5 text-xs font-semibold ${className}`}
  >
    {children}
  </span>
);

const medalVariants = {
  gold: "bg-amber-50/90 dark:bg-amber-900/50 text-amber-900 dark:text-amber-50 border-amber-200 dark:border-amber-700 hover:bg-amber-100/80 dark:hover:bg-amber-800/60",
  silver:
    "bg-slate-50/90 dark:bg-slate-800/50 text-slate-900 dark:text-slate-50 border-slate-200 dark:border-slate-700 hover:bg-slate-100/80 dark:hover:bg-slate-700/60",
  bronze:
    "bg-orange-50/90 dark:bg-orange-900/50 text-orange-900 dark:text-orange-50 border-orange-200 dark:border-orange-700 hover:bg-orange-100/80 dark:hover:bg-orange-800/60",
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
        className="flex w-full items-center justify-between rounded-lg bg-white/80 dark:bg-slate-800/80 p-4 shadow-sm transition-all hover:bg-white dark:hover:bg-slate-700/80"
      >
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          <span className="font-medium">{title}</span>
          <CustomBadge className="bg-blue-100/50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
            {medalsArray.length}
          </CustomBadge>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} className="text-blue-500 dark:text-blue-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-2 overflow-hidden"
          >
            <div className="grid gap-2 p-3">
              {medalsArray.map((medal, index) => (
                <motion.div
                  key={medal.id || index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className={`flex items-center rounded-md border p-3 ${
                    medalVariants[medal.type]
                  }`}
                >
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border bg-white dark:bg-slate-900 shadow-sm">
                    {medalIcons[medal.type]}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{medal.competition}</h4>
                    <div className="mt-1 flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{medal.year}</span>
                    </div>
                  </div>
                  <CustomBadge className="capitalize border-amber-200 dark:border-amber-700 bg-white dark:bg-slate-900">
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
