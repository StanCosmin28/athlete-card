import { motion } from "framer-motion";
// import { usefulLinks } from "../Athlete/usefulLinks";
import { ExternalLink } from "lucide-react";
import { useData } from "../Context/DataContext";

export default function UsefulLinks() {
  const { athleteData } = useData();
  if (!athleteData) return <p>Loading...</p>;
  return (
    <div className="relative w-full rounded-xl bg-card p-6 shadow-sm">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Useful Links
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-purple-500"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {athleteData.useful_links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{link.title}</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
