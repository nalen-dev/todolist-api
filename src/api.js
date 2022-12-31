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

app.use(`/.netlify/functions/api`, routes);
app.use(`/.netlify/functions/api`, router);

module.exports = app;
const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
