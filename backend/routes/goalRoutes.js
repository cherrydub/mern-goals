const express = require("express");
const {
  getGoals,
  getGoal,
  updateGoal,
  addGoal,
  deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();

router.get("/", getGoals);

router.get("/:id", getGoal);

router.post("/:id", addGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
