require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const { connection } = require("./config/db.js")
const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(PORT, async () => {
  // await connect();
  connection()
  console.log(`listen at http://localhost:${PORT}`);
});
