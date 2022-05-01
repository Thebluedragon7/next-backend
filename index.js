require("dotenv").config(); // process.env.ENV_VARIABLE
const express = require("express");
const mongoose = require("mongoose");
const scheduleRouter = require("./routes/schedule-routes");

// Middleware
const app = express();
app.use(express.json());

// ROUTES
app.use("/schedules", scheduleRouter);

// Connections
mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.8ogrp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MDB successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening to port ${port}`));
