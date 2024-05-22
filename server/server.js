const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ message: "the api is working!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
