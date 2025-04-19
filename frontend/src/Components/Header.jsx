// import stanc from "../assets/profile-me.png";
// export default function AthleteHeader() {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md">
//         <img src={stanc} alt="Name" className="w-32 h-32 rounded-full mb-4" />
//         <h2 className="text-3xl font-bold">Stan Cosmin</h2>
//         <p className="text-gray-700">(Fencing Sabre)</p>
//       </div>
//     </>
//   );
// }
import { motion } from "framer-motion";
import { useData } from "../Context/DataContext";
// import stanc from "../assets/profile-me.png";

export default function AthleteHeader() {
  const { athleteData } = useData();
  if (!athleteData) return <p>Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col items-center justify-center rounded-xl bg-card overflow-hidden"
    >
      {/* Floating avatar with shine effect */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative mb-6 mt-4"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/30 blur-md group-hover:blur-lg transition-all duration-500 shadow-[0_0_3px_3px_rgba(59,130,246,0.1)]"></div>
        {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/40 blur-md group-hover:blur-lg transition-all duration-500"></div>{" "} */}
        <img
          src={athleteData.profile_image}
          alt={athleteData.first_name}
          className="relative z-10 w-32 h-32 rounded-full border-4 border-white/80 dark:border-slate-800/80 shadow-xl object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Text with subtle animation */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="text-center space-y-2 relative z-10"
      >
        {/* <h2 className="text-4xl font-bold text-white">
          {athleteData.username}
          {athleteData.sport && (
            <span className="block mt-2 text-xl font-medium text-slate-400">
              {athleteData.sport}
            </span>
          )}
        </h2> */}
        {/* <div className="flex items-baseline gap-3"> */}
        <h2 className="text-4xl font-bold text-white">
          {athleteData.username}
        </h2>
        <span className="text-sm font-semibold bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full border border-slate-600">
          {athleteData.sport}
        </span>

        {/* </div> */}

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-blue-400 mt-4"
        />
      </motion.div>
    </motion.div>
  );
}
