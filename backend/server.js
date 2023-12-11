const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const app = express();
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 8181;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("///START - new request///");
  console.log("---body:", req.body);
  console.log("---path:", req.path);
  console.log("---method:", req.method);
  console.log("///END - new request///");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "got the route" });
});

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) console.log("Error:", err);
  console.log("app is listening on port:", PORT);
});
