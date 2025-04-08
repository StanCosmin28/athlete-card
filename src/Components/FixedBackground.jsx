// import Particles from "./Particles";
import Squares from "./Squares";
export default function FixedBackground() {
  return (
    // <div className="fixed top-0 left-0 w-full h-full z-[-1]">
    //   <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
    //     <Particles
    //       particleColors={["#ffffff", "#ffffff"]}
    //       particleCount={200}
    //       particleSpread={10}
    //       speed={0.1}
    //       particleBaseSize={100}
    //       moveParticlesOnHover={true}
    //       alphaParticles={false}
    //       disableRotation={false}
    //     />
    //   </div>
    //   <div className="w-full h-full bg-gradient-to-b from-indigo-500 to-purple-700 opacity-30" />
    // </div>
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          opacity: 0.1,
        }}
      >
        <Squares
          speed={0.5}
          squareSize={30}
          direction="right" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
    </div>
  );
}
