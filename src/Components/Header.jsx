import stanc from "../assets/profile-me.png";
export default function AthleteHeader() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md">
        <img src={stanc} alt="Name" className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-3xl font-bold">Stan Cosmin</h2>
        <p className="text-gray-700">(Fencing Sabre)</p>
      </div>
    </>
  );
}
