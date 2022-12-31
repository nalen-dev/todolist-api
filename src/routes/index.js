const router = require("express").Router();

const toDoRoutes = require("./todo");
const userRoutes = require("./user");

router.use("/todos", toDoRoutes);
router.use(userRoutes);

module.exports = router;
