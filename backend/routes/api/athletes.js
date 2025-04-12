const express = require("express");
const router = express.Router();
const athletesController = require("../../controllers/athletesController");

// router.get("/", getAthlete.getAthleteData);
router.get("/", athletesController.getAllAthletes);
router.get("/:id", athletesController.getAthleteData);

module.exports = router;
