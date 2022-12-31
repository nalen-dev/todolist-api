const Validator = require("fastest-validator");
const v = new Validator();

module.exports = (req, res, next) => {
  const schema = {
    title: { type: "string" },
    description: { type: "string" },
  };
  const check = v.compile(schema);
  const bodyCheck = check(req.body);

  if (bodyCheck != true) {
    return res.status(400).json(bodyCheck);
  }

  return next();
};
