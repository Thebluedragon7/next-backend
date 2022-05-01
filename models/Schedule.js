const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  block: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  lecturer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Schedule", scheduleSchema);
