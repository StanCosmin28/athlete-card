const mongoose = require("mongoose");
require("dotenv").config();
const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = dbConn;
