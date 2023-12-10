// @desc    get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.json({ message: "got all goals" });
};

// @desc    get goal
// @route   GET /api/goals/:id
// @access  Private
const getGoal = (req, res) => {
  res.json({ message: `got single goal: ${req.param.id}` });
};

// @desc    add goal
// @route   POST /api/goals/
// @access  Private
const setGoal = (req, res) => {
  res.json({ message: `add single goal` });
};

// @desc    update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.json({ message: `updated single goal: ${req.param.id}` });
};

// @desc    delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.json({ message: `deleted single goal: ${req.param.id}` });
};

module.exports = { getGoals, getGoal, updateGoal, deleteGoal, setGoal };
