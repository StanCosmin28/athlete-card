import MedalWall from "./MedalWall";
import { useData } from "../Context/DataContext";
export default function About() {
  const { athleteData } = useData();
  if (!athleteData) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-col justify-center p-4 rounded-lg">
        <h2 className="text-2xl font-bold pb-2">About</h2>
        <p className="pl-4">{athleteData.bio}</p>
        {/* <p className="pl-4">It is built with React and Tailwind CSS.</p> */}
      </div>
      <MedalWall />
    </>
  );
}
