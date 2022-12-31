const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

const router = express.Router();

// connect
mongoose.connect("mongodb+srv://admin:admin123@todolist-cluster.kpe60gd.mongodb.net/todolist?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//handling cors
app.use(cors());
app.options("*", cors());

app.use(express.json());

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.use("/v1/api", routes);

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
