import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award, Calendar, Trophy } from "lucide-react";
import { useState } from "react";

const CustomBadge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
  >
    {children}
  </span>
);

const medalColors = {
  gold: "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200",
  silver: "bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200",
  bronze: "bg-orange-100 text-orange-800 border-orange-300 hover:bg-orange-200",
};

const medalIcons = {
  gold: <Trophy className="h-5 w-5 text-amber-500" />,
  silver: <Trophy className="h-5 w-5 text-slate-400" />,
  bronze: <Trophy className="h-5 w-5 text-orange-500" />,
};

export default function MedalSection({
  title,
  medals = [],
  isActive,
  onToggle,
}) {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  // Verificăm dacă medals este undefined sau null și asigurăm un array gol în acest caz
  const medalsArray = medals || [];

  if (medalsArray.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <button
        onClick={onToggle}
        className="shadow-md flex justify-between items-center w-full p-4 bg-gradient-to-r from-slate-200 to-slate-100 text-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 hover:from-slate-300 hover:to-slate-200 group"
      >
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-semibold">{title}</span>
          <CustomBadge className="ml-2 bg-slate-700/10 border border-slate-300">
            {medalsArray.length}
          </CustomBadge>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 overflow-hidden"
          >
            <div className="grid gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
              {medalsArray.map((medal, index) => (
                <motion.div
                  key={medal.id || index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`flex items-center p-3 rounded-md cursor-pointer border transition-all duration-200 ${
                    medalColors[medal.type]
                  }`}
                  onMouseEnter={() => setHoveredMedal(medal)}
                  onMouseLeave={() => setHoveredMedal(null)}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/80 mr-3 shadow-sm">
                    {medalIcons[medal.type]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{medal.competition}</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{medal.year}</span>
                    </div>
                  </div>
                  <CustomBadge className="border capitalize border-slate-200">
                    {medal.type}
                  </CustomBadge>
                </motion.div>
              ))}
            </div>

            {hoveredMedal && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-3 p-4 bg-white text-slate-800 rounded-lg shadow-md border border-slate-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  {medalIcons[hoveredMedal.type]}
                  <h3 className="font-semibold">{hoveredMedal.competition}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Year</p>
                    <p>{hoveredMedal.year}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Medal</p>
                    <p className="capitalize">{hoveredMedal.type}</p>
                  </div>
                  {hoveredMedal.location && (
                    <div className="col-span-2">
                      <p className="text-gray-500">Location</p>
                      <p>{hoveredMedal.location}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
