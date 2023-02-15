const express = require("express");
const formData = require("express-form-data"); //!!!
const os = require("os");
require("dotenv").config();
require("./models/models");

const cors = require("cors");
const router = require("./routes/router");

const sequelize = require("./db");
const PORT = process.env.PORT;
const app = express();

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
}; //!!!

// parse data with connect-multiparty.
app.use(formData.parse(options)); //!!!

app.use(cors());
app.use(express.json());
app.use("/api/router", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log("Server started...");
    });
  } catch (err) {
    console.log(err);
  }
};
start();
