import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import ThemeToggle from "./Components/ThemeToggle";
import AthleteHeader from "./Components/Header";
import "./App.css";
import About from "./Components/About";
import Medals from "./Components/Medals";
import Sponsors from "./Components/Sponsors";
import UsefulLinks from "./Components/UsefulLinks";
import Story from "./Components/Story";
// import Highlights from "./Components/Highlights";
// import MedalWall from "./Components/MedalWall";
// import ImageTest from "./Components/ImageTest";
import FixedBackground from "./Components/FixedBackground";
import MedalsV2 from "./Components/MedalsV2";
import StoryV2 from "./Components/StoryV2";
import UsefulLinksV2 from "./Components/UsefulLinksV2";
import SponsorsV2 from "./Components/SponsorsV2";
import FixedBackgroundV2 from "./Components/FixedBackgroundV2";
import Copyrights from "./Components/Copyrights";
// import DockLinks from "./Components/DockLinks";
import { useState } from "react";
import AthleteBadge from "./Components/AthleteBadge";
import WaitlistPage from "./Components/Waitlist";

// import AthleteProfile from "./Components/AthleteProfile"; // Creează această componentă nouă

function App() {
  const [simple, setIsSimple] = useState(false);
  const [bg, setBg] = useState(false);

  function handleClick() {
    setIsSimple(!simple);
  }

  function handleClickV2() {
    setBg(!bg);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/athlete-card/waitlist"
          element={
            <>
              <WaitlistPage />
              <FixedBackground />
            </>
          }
        ></Route>
        {/* Ruta pentru homepage (fără username) */}
        <Route
          path="/:username"
          element={
            <>
              <DataProvider>
                {bg ? <FixedBackgroundV2 /> : <FixedBackground />}
                <ThemeToggle />
                <button
                  onClick={handleClick}
                  className="z-100 fixed top-4 left-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  Theme
                </button>
                <button
                  onClick={handleClickV2}
                  className="z-100 fixed top-4 left-22 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  Bg
                </button>
                <div className="max-w-7xl mx-auto px-4 pb-0 py-8 relative">
                  <AthleteHeader />
                  <AthleteBadge />
                </div>
                <div className="max-w-7xl mx-auto px-4 py-4">
                  <About />
                </div>
                <div className="max-w-7xl mx-auto px-4 py-4">
                  {simple ? <MedalsV2 /> : <Medals />}
                </div>
                <div className="max-w-7xl mx-auto px-4 py-4">
                  {simple ? <SponsorsV2 /> : <Sponsors />}
                </div>
                <div className="max-w-7xl mx-auto px-4 py-4">
                  {simple ? <UsefulLinksV2 /> : <UsefulLinks />}
                </div>
                <div className="max-w-7xl mx-auto px-4 py-4">
                  {simple ? <StoryV2 /> : <Story />}
                </div>
                {/* <div className="max-w-7xl mx-auto px-4 py-4">
                  <ImageTest />
                </div> */}
                <Copyrights />
                {/* <DockLinks /> */}
              </DataProvider>
            </>
          }
        />

        {/* Ruta pentru profilul unui athlete (ex: /stancdev) */}
        {/* <Route path="/:username" element={<AthleteProfile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
