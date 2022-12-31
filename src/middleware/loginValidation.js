const Validator = require("fastest-validator");
const v = new Validator();

module.exports = (req, res, next) => {
  const schema = {
    userId: { type: "number", positive: true, integer: true },
  };
  const check = v.compile(schema);
  const bodyCheck = check(req.body);

  if (bodyCheck != true) {
    return res.status(400).json(bodyCheck);
  }

  const { userId } = req.body;
  if (!/^\d{4,}$/.test(String(userId))) {
    return res.status(400).json({ msg: "id must be 4 numbers or more" });
  }

  return next();
};
