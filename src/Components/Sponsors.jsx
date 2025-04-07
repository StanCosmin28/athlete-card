import sponsors from "../Athlete/sponsors";

export default function Sponsors() {
  return (
    <div className="flex flex-col justify-center p-4 rounded-lg shadow-md relative">
      <h2 className="text-2xl font-bold pb-2 text-left">Sponsors</h2>

      <div className="relative">
        {/* Containerul principal cu scroll */}
        <div className="flex overflow-x-auto scrollbar-hide gap-5 py-2 px-2 scroll-smooth">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex-shrink-0 flex flex-col items-center justify-end w-24 h-24 rounded-lg"
              style={{
                backgroundImage: `url(${sponsor.logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full bg-black bg-opacity-70 py-1 px-2 rounded-b-lg">
                <p className="text-white text-xs font-medium text-center truncate">
                  {sponsor.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fade-out pe partea dreaptă */}
        <div className="pointer-events-none absolute inset-y-0 right-[-1px] w-40 bg-gradient-to-l from-[#0d0d0d] to-transparent"></div>
      </div>
    </div>
  );
}
