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

const updateAthlete = async (req, res) => {
  const {
    first_name,
    last_name,
    date_of_birth,
    mobile,
    country,
    city,
    sport,
    profile_image,
    social_links,
    olympian,
    world_no,
    verified,
    bio,
    story,
    competitions,
    sponsors,
    useful_links,
  } = req.body;
  if (
    !first_name ||
    !last_name ||
    !date_of_birth ||
    !mobile ||
    !country ||
    !city ||
    !sport ||
    !profile_image ||
    !social_links ||
    !olympian ||
    !world_no ||
    !verified ||
    !bio ||
    !story ||
    !competitions ||
    !sponsors ||
    !useful_links
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const username = req.params.username;
  try {
    const updatedAthlete = await Athlete.findOneAndUpdate(
      { username },
      {
        $set: {
          first_name,
          last_name,
          date_of_birth: new Date(date_of_birth),
          mobile,
          country,
          city,
          sport,
          profile_image,
          social_links,
          olympian: olympian ?? false, // Default to false if not provided
          world_no: world_no ?? null, // Default to null if not provided
          verified: verified ?? false, // Default to false if not provided
          bio,
          story,
          competitions,
          sponsors,
          useful_links,
          last_active: new Date(), // Update last_active timestamp
        },
      },
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );

    if (!updatedAthlete) {
      return res.status(404).json({ message: "Athlete not found!" });
    }

    return res.status(200).json({
      message: "Athlete updated successfully!",
      athlete: updatedAthlete,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllAthletes,
  getAthleteData,
  waitlistAthlete,
  getWaitlistAthletes,
  updateAthlete,
};
