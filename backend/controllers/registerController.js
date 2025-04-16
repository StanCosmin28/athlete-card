// // controllers/registerController.js
// const Athlete = require("../model/Athlete");
const Athlete = require("../model/Athlete.js");
const bcrypt = require("bcrypt");

const handleNewAthlete = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Toate campurile sunt obligatorii" });
  }
  try {
    //     // ✅ Verificare duplicat username sau email
    const duplicateUsername = await Athlete.findOne({ username }).exec();
    const duplicateEmail = await Athlete.findOne({ email }).exec();

    if (duplicateUsername) {
      return res.status(409).json({ message: "Username already exists!" });
    }
    if (duplicateEmail) {
      return res.status(409).json({ message: "Email already exists!" });
    }
    //     // ✅ Hash parola
    const hashedPwd = await bcrypt.hash(password, 10);

    //     // ✅ Creează noul atlet
    const result = await Athlete.create({
      username,
      email,
      password: hashedPwd,
    });
    return res.status(201).json({ message: "Athlete Created Successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Eroare de Server" });
  }
};
module.exports = { handleNewAthlete };
