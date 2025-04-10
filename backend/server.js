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

const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ data: "gatUserData()" });
});

app.get("/test1", (req, res) => {
  res.send({ test: "test - get all users" });
});
app.get("/test2", (req, res) => {
  res.send({ test: "test - get all users with email" });
});
app.get("/test3", (req, res) => {
  res.send({ test: "test - get all olympians" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
