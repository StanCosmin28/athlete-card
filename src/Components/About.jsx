import MedalWall from "./MedalWall";
export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center p-4 rounded-lg">
        <h2 className="text-2xl font-bold pb-2">About</h2>
        <p className="pl-4">
          Stan Cosmin is a professional fencer specializing in sabre. With
          numerous national and international medals, including Olympic
          achievements, Stan is a prominent figure in the world of fencing.
        </p>
        <p className="pl-4">It is built with React and Tailwind CSS.</p>
      </div>
      <MedalWall />
    </>
  );
}
