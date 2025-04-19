const mongoose = require("mongoose");

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const waitlistSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  sport: {
    type: String,
    require: true,
  },
  experienceLevel: {
    type: String,
    require: true,
  },
});

// const Athlete = mongoose.model("Athlete", athleteSchema);
// export default Athlete;
module.exports = mongoose.model("Waitlist", waitlistSchema);
