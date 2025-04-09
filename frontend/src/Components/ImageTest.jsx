import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useData } from "../Context/DataContext";
// import img4 from "../assets/me1.png";
// import img5 from "../assets/me2.png";
// import img6 from "../assets/me3.png";
// import img7 from "../assets/me4.png";
// import img8 from "../assets/me5.png";
// import img9 from "../assets/profile-me.png";

export default function ImageTest() {
  const { athleteData } = useData();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (!athleteData) return <p>Loading...</p>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-wrap justify-center gap-4 p-4"
    >
      {athleteData.gallery.map((img, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1rem)]"
        >
          <img
            src={img.src}
            alt={`Gallery item ${index + 1}`}
            className="w-full h-auto rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

// Usage example
// export default function PhotosComponent() {
//   const sampleImages = [img4, img5, img6, img7, img8, img9];

//   return <ImageGrid images={sampleImages} />;
// }
