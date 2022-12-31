const { User } = require("../models/Schema");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req._id).populate("todos").exec();

    return res.status(200).json(user);
  } catch (error) {}
};
