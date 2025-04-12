import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../Athlete/data.json"; // sau obiectul local inițial

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [athleteData, setAthleteData] = useState(null);
  // const { username } = useParams();

  // console.log(data);
  useEffect(() => {
    // înlocuiește cu fetch real mai târziu
    setAthleteData(data);
  }, []);

  //fetch data from the BE after you conditionally render the FE components
  // useEffect(() => {
  //   if (!username) return;
  //   fetch(`http://localhost:3000/${username}`)
  //     .then((res) => res.json())
  //     .then((data) => setAthleteData(data))
  //     .catch((err) => console.error(err));
  // }, [username]);

  return (
    <DataContext.Provider value={{ athleteData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
