import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/workoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
    </div>
  );
};

export default Home;
