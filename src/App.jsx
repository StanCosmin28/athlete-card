// import stanc from "./assets/profile-me.png";
// import viteLogo from "/vite.svg";
import ThemeToggle from "./Components/ThemeToggle";
import AthleteHeader from "./Components/Header";
import "./App.css";
import About from "./Components/About";
import Medals from "./Components/Medals";
import Sponsors from "./Components/Sponsors";
import UsefulLinks from "./Components/UsefulLinks";
import Story from "./Components/Story";
import Highlights from "./Components/Highlights";
// import MedalsPitComponent from "./Components/MedalPitComponent";
import MedalWall from "./Components/MedalWall";
import ImageTest from "./Components/ImageTest";
import FixedBackground from "./Components/FixedBackground";
// import MedalPhysicsWall from "./Components/MedalPhysicsWall";

function App() {
  return (
    <>
      <FixedBackground />
      <ThemeToggle />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="flex justify-center">Athelte App</h1>
        <AthleteHeader />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <About />
        <MedalWall />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Medals />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Sponsors />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <UsefulLinks />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Story />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Highlights />
      </div>
      <div className="max-w-7xl max-h-[550px] mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold">Medals</h2>
        {/* <MedalsPitComponent /> */}
        <MedalWall />
        {/* <MedalPhysicsWall /> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ImageTest />
      </div>
    </>
  );
}

export default App;
