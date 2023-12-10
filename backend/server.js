const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8181;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("---body:", req.body);
  console.log("---path:", req.path);
  console.log("---method:", req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "got the route" });
});

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(PORT, (err) => {
  if (err) console.log("Error:", err);
  console.log("app is listening on port:", PORT);
});
