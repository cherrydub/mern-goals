// @desc    Auth a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ messsage: "login user" });
};

// @desc    register new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({ messsage: "registered user" });
};

// @desc    get user data
// @route   GET /api/users/me
// @access  Public
const getMe = (req, res) => {
  res.json({ messsage: "user data received" });
};

module.exports = { loginUser, registerUser, getMe };
