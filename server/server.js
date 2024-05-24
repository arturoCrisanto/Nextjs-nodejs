const express = require("express");
const userRoutes = require("./Routes/userRoute");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());

// app.get("/api/home", (req, res) => {
//   res.json({ message: "the api is working!" });
// });

app.use("/api/users", userRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});
