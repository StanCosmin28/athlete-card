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

function App() {
  return (
    <>
      <ThemeToggle />
      <div className="max-w-7xl mx-auto px-4 py-8 bg-amber-100">
        <h1 className="flex justify-center">Athelte App</h1>
        <AthleteHeader />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 bg-amber-100">
        <About />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 bg-amber-100">
        <Medals />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 bg-amber-100">
        <Sponsors />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 bg-amber-100">
        <UsefulLinks />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 bg-amber-100">
        <Story />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 bg-amber-100">
        <Highlights />
      </div>
    </>
  );
}

export default App;
