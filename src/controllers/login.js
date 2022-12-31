const { User } = require("../models/Schema");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const { userId } = req.body;

  try {
    const newUser = (await User.findOne({ userId })) || (await User.create({ userId }));

    const token = jwt.sign({ _id: newUser._id }, "secretkey");

    return res.status(200).json({ msg: "login success", token });
  } catch (error) {}
};
