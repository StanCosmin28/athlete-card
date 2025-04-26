const express = require("express");
const router = express.Router();
const athletesController = require("../controllers/athletesController");

router.post("/", athletesController.waitlistAthlete);
router.get("/", athletesController.getWaitlistAthletes);

module.exports = router;
