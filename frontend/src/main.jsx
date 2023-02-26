import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { WorkoutContextProvider } from "./context/WorkoutContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
