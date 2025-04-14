const Athlete = require("../model/Athlete.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Email and password are required!" });

  const foundAthlete = await Athlete.findOne({ email });
  if (!foundAthlete) return res.sendStatus(401);

  const match = await bcrypt.compare(password, foundAthlete.password);
  if (match) {
    const roles = [...Object.values(foundAthlete.roles)];

    //create Access Token (payload, secret, options) that will be in the Athlete Data(DB)
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundAthlete.username,
          roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    //create refresh token that will be stored on the client  => ex. cookies httpOnly
    const refreshToken = jwt.sign(
      { username: foundAthlete.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    foundAthlete.refreshToken = refreshToken;
    const result = await foundAthlete.save();

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken, roles });
  } else {
    return res.sendStatus(401);
  }
};

module.exports = { handleLogin };
