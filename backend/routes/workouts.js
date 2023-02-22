const express = require("express");
const Workout = require("../models/workoutModel.js");
const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

// GET a single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workouts" });
});

// POST a new workout
router.post("/", async (req, res) => {

  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // res.json({ mssg: "POST a single workouts" });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a  workouts" });
});

// UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workouts" });
});

// exports
module.exports = router;