const express = require("express");
const router = express.Router();
const athletesController = require("../controllers/athletesController");

router.post("/", athletesController.waitlistAthlete);

module.exports = router;
