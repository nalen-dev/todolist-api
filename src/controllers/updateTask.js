const { ToDo } = require("../models/Schema");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await ToDo.findById(id);

    if (task == null) {
      return res.status(400).json({ msg: "Task not found" });
    }

    if (req._id !== String(task.user)) {
      return res.status(404).json({ msg: "Forbiden resource" });
    }

    const title = req.body.title || task.title;
    const description = req.body.description || task.description;
    const status = req.body.status || task.status;

    await ToDo.updateOne({ _id: id }, { title, description, status });

    return res.status(201).json({ msg: "Task updated!" });
  } catch (error) {}
};
