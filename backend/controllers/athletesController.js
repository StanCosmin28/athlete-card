const Athlete = require("../model/Athlete.js");

const getAllAthletes = async (req, res) => {
  const athletes = await Athlete.find();
  if (!athletes) return res.status(204).json({ message: "No Athletes! :(" });
  return res.json(athletes);
};

const getAthleteData = async (req, res) => {
  const username = req.params.id;
  const athlete = await Athlete.findOne({ username });
  return res.json(athlete);
};

module.exports = { getAllAthletes, getAthleteData };
