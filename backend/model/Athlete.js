// import mongoose from "mongoose";
const mongoose = require("mongoose");

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const competitionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  competition: { type: String, required: true },
  type: { type: String, required: true },
  year: { type: String, required: true },
  location: { type: String, required: true },
});

const athleteSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  refreshToken: String,
  roles: {
    FREE: { type: Number, default: 2001 },
    PRO: Number,
    ELITE: Number,
  },
  first_name: String,
  last_name: String,
  date_of_birth: Date,
  mobile: String,
  country: String,
  city: String,
  sport: String,
  profile_image: String,
  social_links: {
    instagram: String,
    facebook: String,
    twitter: String,
    tiktok: String,
    youtube: String,
    website: String,
  },
  olympian: Boolean,
  world_no: Number,
  verified: Boolean,
  joined_at: Date,
  last_active: Date,
  tags: [String],
  bio: String,
  story: {
    title: String,
    content: String,
  },
  competitions: {
    international: [competitionSchema],
    national: [competitionSchema],
    regional: [competitionSchema],
  },
  gallery: [
    {
      src: String,
      alt: String,
    },
  ],
  sponsors: [
    {
      id: Number,
      name: String,
      logo: String,
      url: String,
    },
  ],
  useful_links: [
    {
      title: String,
      url: String,
      description: String,
    },
  ],
});

// const Athlete = mongoose.model("Athlete", athleteSchema);
// export default Athlete;
module.exports = mongoose.model("Athlete", athleteSchema);
