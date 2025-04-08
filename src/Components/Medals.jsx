import { useState } from "react";
import MedalSection from "./MedalSection";
import dummyData from "../Athlete/athlete";
import { Trophy } from "lucide-react";

export default function Medals() {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div
      className="flex flex-col justify-center p-8 rounded-2xl
      bg-gradient-to-br dark:from-slate-900/40 dark:to-slate-900/20
      backdrop-blur-sm border dark:border-slate-700/50
      shadow-xl shadow-blue-500/10 dark:shadow-blue-800/10 mx-auto relative overflow-hidden"
    >
      {/* Decorative elements for a more modern look */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="text-left mb-8 relative z-10">
        <h2 className="text-3xl font-bold mb-2 text-slate-800 dark:text-slate-100 flex items-center">
          <Trophy className="h-8 w-8 mr-3 text-blue-500 dark:text-blue-400" />
          Medals/Results
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      <MedalSection
        title="Competiții Internaționale"
        medals={dummyData.international}
        isActive={activeSection === "international"}
        onToggle={() => toggleSection("international")}
      />

      <MedalSection
        title="Competiții Naționale"
        medals={dummyData.national}
        isActive={activeSection === "national"}
        onToggle={() => toggleSection("national")}
      />

      <MedalSection
        title="Competiții Regionale"
        medals={dummyData.regional}
        isActive={activeSection === "regional"}
        onToggle={() => toggleSection("regional")}
      />
    </div>
  );
}
