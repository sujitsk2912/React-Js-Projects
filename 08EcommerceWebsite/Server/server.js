require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router.js");
const connectDb = require("./utils/db.js");
const User = require("./models/user_model.js");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/auth", router);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
  });
});
