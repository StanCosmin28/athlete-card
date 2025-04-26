const Athlete = require("../model/Athlete.js");
const Waitlist = require("../model/Waitlist.js");

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

const waitlistAthlete = async (req, res) => {
  const { fullname, email, sport, experienceLevel } = req.body;

  if (!fullname || !email || !sport || !experienceLevel) {
    return res
      .status(400)
      .json({ message: "Toate campurile sunt obligatorii" });
  }
  try {
    const duplicateEmail = await Waitlist.findOne({ email });

    if (duplicateEmail) {
      return res.status(409).json({ message: "Email already exists!" });
    }
    const result = await Waitlist.create({
      fullname,
      email,
      sport,
      experienceLevel,
    });
    return res.status(201).json({ message: "You was waitlisted! Thanks!:)" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Eroare de Server" });
  }
};

const getWaitlistAthletes = async (req, res) => {
  const waitlistAthletes = await Waitlist.find();
  if (!waitlistAthletes)
    return res.status(204).json({ message: "No waitlist athletes! :(" });

  return res.json(waitlistAthletes);
};

module.exports = {
  getAllAthletes,
  getAthleteData,
  waitlistAthlete,
  getWaitlistAthletes,
};
