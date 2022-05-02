const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/schedule-controller");

router.get("/", scheduleController.getSchedules);

router.post("/", scheduleController.addSchedules);

router.get("/:id", scheduleController.getSchedulesById);

router.put("/:id", scheduleController.updateScheduleById);

router.delete("/:id", scheduleController.deleteScheduleById);

module.exports = router;
