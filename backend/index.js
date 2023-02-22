require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT;
const db = process.env.MONGO_DB_URI;

// ROUTES
const workoutsRoutes = require("./routes/workouts");

// MIDDLEWARE
//look for a body to parse it, and attach it to the request object
app.use(express.json());

//log all request
app.use((req, res, next) => {
  console.log(req.path, req.method, req.body);
  next();
});

// ROUTES + CONDITION
app.use("/api/workouts", workoutsRoutes);

//CONNECT TO DB
mongoose.set("strictQuery", false);
mongoose
  .connect(db)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
