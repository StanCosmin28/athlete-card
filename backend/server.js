// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// require("dotenv").config();
// const connectDB = require("./config/dbConn");
// // const authRoutes = require("./routes/register");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // DB connect
// connectDB();

// // app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.json());
// app.use(cookieParser());

// // ROUTES
// app.use("/register", require("./routes/register"));
// // app.use("/login", require("./routes/login"));

// router.get("/", (req, res) => {
//   res.send("Home Page");
// });
// // Protejăm rutele de aici în jos cu JWT
// // app.use(require("./middleware/verifyJWT"));

// // Error 404 fallback
// // app.all("*", (req, res) => res.status(404).json({ error: "Not found" }));

// // Server start
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
// // mongoose.connection.once("open", () => {
// //   console.log("✅ Connected to MongoDB");
// //   app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // });

/////
// const path = require("path");
// const cors = require("cors");
// const corsOptions = require("./config/corsOptions");
// const { logger } = require("./middleware/logEvents");
// const errorHandler = require("./middleware/errorHandler");
// const verifyJWT = require("./middleware/verifyJWT");
// const cookieParser = require("cookie-parser");
// const credentials = require("./middleware/credentials");
// const mongoose = require("mongoose");
// const connectDB = require("./config/dbConn");
// const PORT = process.env.PORT || 3000;
/////

const express = require("express");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout")); //handle also in FE whe the AccessToken Expires (=>403) call /refresh route to get a new one without the login infos
//athletes api
app.use("/", require("./routes/api/athletes"));

mongoose.connection.once("open", () => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port http://localhost:${PORT}/`);
// });
