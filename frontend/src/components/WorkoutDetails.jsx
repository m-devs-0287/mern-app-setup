import React from "react";

const WorkoutDetails = ({ workout }) => {
  const { _id, title, reps, load } = workout;

  return (
    <div>
      <h2>Workout {title}</h2>
      <p>Reps: {reps}</p>
      <p>Load: {load}</p>
    </div>
  );
};

export default WorkoutDetails;
