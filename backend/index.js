const express = require("express");
require("dotenv").config();
const app = express();
require("./Models/db");
const TaskRouter = require("./Routes/TaskRouter");

const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello From The App");
});

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use("/tasks", TaskRouter);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT, ".....");
});
