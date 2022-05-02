const Schedule = require("../models/Schedule");

const getSchedules = async (req, res, next) => {
  let schedules = await Schedule.find();
  if (!schedules) {
    return res.status(404).json({
      message: "No Items Available!",
    });
  }
  res.status(200).json({ schedules });
};

const addSchedules = async (req, res, next) => {
  let schedules = new Schedule({
    title: req.body.title,
    group: req.body.group,
    day: req.body.day,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    block: req.body.block,
    room: req.body.room,
    lecturer: req.body.lecturer,
  });

  schedules = await schedules.save();

  if (!schedules) {
    return res.status(500).json({
      message: "Cannot Add the Item",
    });
    next();
  }

  res.status(201).json({ schedules });
};

const getScheduleById = async (req, res, next) => {
  const scheduleID = req.params.id;

  let schedule = await Schedule.findById(scheduleID);
  if (!schedule) {
    res.status(404).json({
      message: `No category with id: ${scheduleID} was found`,
    });
  }

  res.status(200).json({ schedule });
};

const updateScheduleById = async (req, res, next) => {
  const scheduleID = req.params.id;

  let schedule = await Schedule.findByIdAndUpdate(scheduleID, {
    title: req.body.title,
    group: req.body.group,
    day: req.body.day,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    block: req.body.block,
    room: req.body.room,
    lecturer: req.body.lecturer,
  });

  schedule = await schedule.save();

  if (!schedule) {
    res.status(500).json({
      message: "Cannot Save the Schedule",
    });
  }

  res.status(200).json({ schedule });
};

const deleteScheduleById = async (req, res, next) => {
  const scheduleID = req.params.id;

  let schedule = await Schedule.findByIdAndRemove(scheduleID);

  if (!schedule) {
    res.status(404).json({
      message: "Cannot delet the Schedule!",
    });
  }

  res.status(200).json({
    message: "Schedule Deleted Successfully!",
  });
};

exports.getSchedules = getSchedules;
exports.addSchedules = addSchedules;
exports.getSchedulesById = getScheduleById;
exports.updateScheduleById = updateScheduleById;
exports.deleteScheduleById = deleteScheduleById;
