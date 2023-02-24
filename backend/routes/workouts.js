const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getAllWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// GET all workouts
router.get("/", getAllWorkout);

// GET a single workouts
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a new workout
router.patch("/:id", updateWorkout);

// exports
module.exports = router;
