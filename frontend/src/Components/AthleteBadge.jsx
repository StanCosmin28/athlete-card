import Lanyard from "./Lanyard";
export default function AthleteBadge() {
  return (
    <Lanyard
      position={[0, 0, 13]} // mai sus, ca să cadă
      gravity={[0, -40, 0]}
      scale={[1.5, 1.5, 1.5]} // mărit badge-ul
    />
  );
}
