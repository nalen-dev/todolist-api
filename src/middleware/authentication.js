const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization || req.headers.Authorization;

  try {
    if (authorization == undefined) {
      return res.status(403).json({ msg: "can't access this resource, please login first" });
    }
    const data = jwt.verify(authorization.split(" ")[1], "secretkey");

    req._id = data._id;
    return next();
  } catch (error) {
    return res.status(401).json({ msg: "invalid token" });
  }
};
