// export default function Medals() {

// }
import { useState } from "react";
import MedalSection from "./MadalSection";
import dummyData from "../Athlete/athlete"; // Importăm datele dummy
// Date dummy pentru medalii

export default function Medals() {
  //   const [activeSection, setActiveSection] = useState("international");
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="flex flex-col justify-center bg-amber-300 p-4 rounded-lg shadow-md">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold mb-2">Medals/Results</h2>
        {/* <p className="text-muted-foreground">
        ...
        </p> */}
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
