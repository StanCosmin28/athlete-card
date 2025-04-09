// import stanc from "./assets/profile-me.png";
// import viteLogo from "/vite.svg";
import { DataProvider } from "./Context/DataContext";
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
import MedalsV2 from "./Components/MedalsV2";
import StoryV2 from "./Components/StoryV2";
import UsefulLinksV2 from "./Components/UsefulLinksV2";
import SponsorsV2 from "./Components/SponsorsV2";
import FixedBackgroundV2 from "./Components/FixedBackgroundV2";
import Copyrights from "./Components/Copyrights";
// import GlassmorphismWrapper from "./Components/GlassmorphismWrapper";
// import MedalPhysicsWall from "./Components/MedalPhysicsWall";
import { useState } from "react";
function App() {
  const [simple, setIsSimple] = useState(false);
  const [bg, setBg] = useState(false);

  function handleClick() {
    console.log("changed!");
    setIsSimple(!simple);
  }
  function handleClickV2() {
    setBg(!bg);
    console.log("changed!");
  }
  return (
    <>
      <DataProvider>
        {bg ? <FixedBackground /> : <FixedBackgroundV2 />}
        <ThemeToggle />
        <button
          onClick={handleClick}
          className="z-100 fixed top-4 left-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
          T
        </button>
        <button
          onClick={handleClickV2}
          className="z-100 fixed top-4 left-12 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
          Bg
        </button>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* <h1 className="flex justify-center">Athelte App</h1> */}
          <AthleteHeader />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* <GlassmorphismWrapper> */}
          <About />
          {/* <MedalWall /> */}
          {/* </GlassmorphismWrapper> */}
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4">
          {simple ? <Medals /> : <MedalsV2 />}
          {/* <Medals />
        <MedalsV2 /> */}
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4">
          {simple ? <Sponsors /> : <SponsorsV2 />}
          {/* <Sponsors />
        <SponsorsV2 /> */}
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4">
          {simple ? <UsefulLinks /> : <UsefulLinksV2 />}
          {/* <UsefulLinks />
        <UsefulLinksV2 /> */}
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4">
          {simple ? <Story /> : <StoryV2 />}
          {/* <Story />
        <StoryV2 /> */}
        </div>
        {/* <div className="max-w-7xl mx-auto px-4 py-4">
        <Highlights />
      </div> */}
        {/* <div className="max-w-7xl max-h-[550px] mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold">Medals</h2>
        <MedalsPitComponent />
        <MedalWall />
        <MedalPhysicsWall />
      </div> */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <ImageTest />
        </div>
        <Copyrights />
      </DataProvider>
    </>
  );
}

export default App;
