import { motion } from "framer-motion";
// import { usefulLinks } from "../Athlete/usefulLinks"; // Adjust the path as needed
import { ExternalLink } from "lucide-react"; // Optional - for link icon
import { useData } from "../Context/DataContext";
export default function UsefulLinks() {
  const { athleteData } = useData();

  if (!athleteData) return <p>Loading...</p>;
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
            Useful Links
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {athleteData.useful_links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg transition-all
                bg-white/30 dark:bg-slate-800/30
                backdrop-blur-sm border border-white/30 dark:border-slate-700/50
                hover:bg-white/40 dark:hover:bg-slate-700/40
                shadow-md shadow-blue-500/5 dark:shadow-blue-800/5
                hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-800/10
                group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2 text-slate-800 dark:text-slate-100">
                  {link.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
