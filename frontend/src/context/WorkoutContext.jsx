import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const WorkoutsReducer = (state, action) => {
  
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.paylaod,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WorkoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutContext.Provider value={{...state, dispatch}}>
      {children}
    </WorkoutContext.Provider>
  );
};
