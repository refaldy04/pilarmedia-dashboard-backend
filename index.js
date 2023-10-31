const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static("assets"));

app.use("/", require("./src/routes"));

app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Resource not found",
  });
});

app.listen(3334, () => {
  console.log(`App is running on port 3334`);
});
