const express = require("express");
const {
  getGoals,
  getGoal,
  updateGoal,
  setGoal,
  deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);

// router.get("/", getGoals);

// router.post("/", setGoal);

router
  .route("/:id")
  .get(protect, getGoal)
  .put(protect, updateGoal)
  .delete(protect, deleteGoal);

// router.get("/:id", getGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
