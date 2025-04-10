// // controllers/registerController.js
// const Athlete = require("../Model/Athlete");
// const bcrypt = require("bcrypt");

// const handleNewAthlete = async (req, res) => {
//   const { username, email, password } = req.body;

//   // ✅ Verificare inputuri
//   if (!username || !email || !password) {
//     return res
//       .status(400)
//       .json({ message: "Toate câmpurile sunt obligatorii." });
//   }

//   try {
//     // ✅ Verificare duplicat username sau email
//     const duplicateUser = await Athlete.findOne({ username }).exec();
//     const duplicateEmail = await Athlete.findOne({ email }).exec();

//     if (duplicateUser) {
//       return res.status(409).json({ message: "Username-ul există deja." });
//     }

//     if (duplicateEmail) {
//       return res.status(409).json({ message: "Email-ul există deja." });
//     }

//     // ✅ Hash parola
//     const hashedPwd = await bcrypt.hash(password, 10);

//     // ✅ Creează noul atlet
//     const result = await Athlete.create({
//       username,
//       email,
//       password: hashedPwd,
//     });

//     return res.status(201).json({
//       success: `Athlete ${result.username} a fost înregistrat cu succes!`,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Eroare server." });
//   }
// };

// module.exports = { handleNewAthlete };
