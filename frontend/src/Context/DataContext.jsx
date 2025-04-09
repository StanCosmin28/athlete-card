import { createContext, useContext, useState, useEffect } from "react";
import data from "../Athlete/data.json"; // sau obiectul local inițial

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [athleteData, setAthleteData] = useState(null);
  // console.log(data);
  useEffect(() => {
    // înlocuiește cu fetch real mai târziu
    // useEffect(() => {
    //   fetch("https://api.site.com/athletes/{id}")
    //     .then(res => res.json())
    //     .then(data => setAthleteData(data))
    //     .catch(err => console.error(err));
    // }, []);
    setAthleteData(data);
  }, []);

  return (
    <DataContext.Provider value={{ athleteData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
