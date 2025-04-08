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
import stanc from "../assets/profile-me.png";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col items-center justify-center p-8 rounded-xl bg-card shadow-lg overflow-hidden"
    >
      {/* Floating avatar with shine effect */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/40 blur-md group-hover:blur-lg transition-all duration-500"></div>{" "}
        <img
          src={stanc}
          alt="Stan Cosmin"
          className="relative z-10 w-32 h-32 rounded-full border-4 border-white/80 dark:border-slate-800/80 shadow-xl object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Text with subtle animation */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="text-center space-y-2 relative z-10"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Stan Cosmin
        </h2>
        <p className="text-lg font-medium text-muted-foreground">
          Fencing Sabre
        </p>

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
