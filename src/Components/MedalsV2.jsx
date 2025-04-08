import { useState } from "react";
import MedalSectionV2 from "./MedalSectionV2";
import dummyData from "../Athlete/athlete";

export default function Medals() {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="w-full  space-y-6 rounded-lg bg-card p-6 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Medals/Results
        </h2>
        <p className="text-sm text-muted-foreground">
          All competition achievements and awards
        </p>
      </div>

      <div className="space-y-4">
        <MedalSectionV2
          title="International Competitions"
          medals={dummyData.international}
          isActive={activeSection === "international"}
          onToggle={() => toggleSection("international")}
        />

        <MedalSectionV2
          title="National Competitions"
          medals={dummyData.national}
          isActive={activeSection === "national"}
          onToggle={() => toggleSection("national")}
        />

        <MedalSectionV2
          title="Regional Competitions"
          medals={dummyData.regional}
          isActive={activeSection === "regional"}
          onToggle={() => toggleSection("regional")}
        />
      </div>
    </div>
  );
}
