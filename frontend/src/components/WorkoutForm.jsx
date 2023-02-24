import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  return (
    <form>
      <h3>Add a new workout</h3>

      <label>Exercice Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Reps: </label>
      <input
        type="number"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <button>Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
