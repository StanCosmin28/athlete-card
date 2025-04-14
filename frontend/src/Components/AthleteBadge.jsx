import Lanyard from "./Lanyard";
export default function AthleteBadge() {
  return (
    <>
      <div className="absolute h-[500px] w-[100px] md:w-[250px] lg:hidden z-100 left-5"></div>
      <div className="absolute h-[500px] w-[100px] md:w-[250px] lg:hidden z-100 right-5"></div>
      <div className="absolute h-[150px] w-90 mx-auto md:w-[250px] lg:hidden z-100 bottom-0 left-0 right-0"></div>

      <Lanyard
        position={[0, 0, 13]} // mai sus, ca să cadă
        gravity={[0, -40, 0]}
        scale={[1.5, 1.5, 1.5]} // mărit badge-ul
      />
    </>
  );
}
