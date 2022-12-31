const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: Number,
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: "todo",
    },
  ],
});

const toDoSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const User = mongoose.model("user", userSchema);
const ToDo = mongoose.model("todo", toDoSchema);

module.exports = { User, ToDo };
