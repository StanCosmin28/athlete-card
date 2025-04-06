import { motion } from "framer-motion";
import { usefulLinks } from "../Athlete/usefulLinks"; // Adjust the path as needed

export default function UsefulLinks() {
  return (
    <div className="flex flex-col justify-center bg-amber-300 p-4 rounded-lg shadow-md relative">
      <h2 className="text-2xl font-bold pb-2 text-left">Useful Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {usefulLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="font-semibold mb-2">{link.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
              {link.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
