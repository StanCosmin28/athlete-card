// import GoldMedal from "../assets/profile-me.png";
// import SilverMedal from "../assets/logo.png";
// import BronzeMedal from "../assets/profile-me.png";
// import { motion } from "framer-motion";

// const medalsData = [
//   ...Array(10).fill({ type: "gold" }),
//   ...Array(7).fill({ type: "silver" }),
//   ...Array(3).fill({ type: "bronze" }),
// ].map((medal, index) => ({ id: index + 1, ...medal }));

// // Medalii componentă
// const Medal = ({ type, index }) => {
//   const MedalIcon =
//     type === "gold" ? GoldMedal : type === "silver" ? SilverMedal : BronzeMedal;

//   return (
//     <motion.div
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{
//         delay: index * 0.03,
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       }}
//       whileHover={{ scale: 1.1 }}
//       className="w-14 h-14 sm:w-16 sm:h-16 m-1 sm:m-2 "
//     >
//       <img
//         src={MedalIcon}
//         alt={`${type} medal`}
//         className="w-full h-full object-contain"
//       />
//     </motion.div>
//   );
// };

// export default function MedalWall() {
//   return (
//     <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-4 p-4 sm:p-8 justify-items-center bg-amber-300">
//       {medalsData.map((medal, index) => (
//         <Medal key={medal.id} type={medal.type} index={index} />
//       ))}
//     </div>
//   );
// }
import GoldMedal from "../assets/gold.png";
import SilverMedal from "../assets/silver.png";
import BronzeMedal from "../assets/bronze.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const medalsData = [
  ...Array(13).fill({ type: "gold" }),
  ...Array(13).fill({ type: "silver" }),
  ...Array(4).fill({ type: "bronze" }),
].map((medal, index) => ({ id: index + 1, ...medal }));

const Medal = ({ type, index }) => {
  const MedalIcon =
    type === "gold" ? GoldMedal : type === "silver" ? SilverMedal : BronzeMedal;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }} // Apare când este vizibil pe ecran
      transition={{
        delay: index * 0.03,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
      // whileHover={{ scale: 1.1 }}
      className="w-14 h-14 sm:w-16 sm:h-16 m-1 sm:m-2"
    >
      <img
        src={MedalIcon}
        alt={`${type} medal`}
        className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
      />
    </motion.div>
  );
};

export default function MedalWall() {
  const { ref, inView } = useInView({
    triggerOnce: true, //rebember to trigger only once
    threshold: 0.2, // Trigger the animation when 20% of the section is visible
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-4 p-4 sm:p-8 justify-items-center "
    >
      {medalsData.map((medal, index) => (
        <Medal
          key={medal.id}
          type={medal.type}
          index={index}
          shouldAnimate={inView}
        />
      ))}
    </div>
  );
}
