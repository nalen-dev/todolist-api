const { ToDo, User } = require("../models/Schema");

module.exports = async (req, res, next) => {
  const { title, description } = req.body;
  const _id = req._id;
  try {
    const newToDo = await ToDo.create({ title, description, user: _id });
    const update = await User.findByIdAndUpdate({ _id }, { $push: { todos: newToDo._id } });

    return res.status(201).json({ msg: "creating new todolist" });
  } catch (error) {}
};
