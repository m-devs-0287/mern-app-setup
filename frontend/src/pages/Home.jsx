import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";


const Home = () => {
  const {workout, dispatch} =  useWorkoutsContext()

  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <WorkoutForm />
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
    </div>
  );
};

export default Home;
