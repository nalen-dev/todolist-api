const router = require("express").Router();
const middleware = require("../middleware");
const controller = require("../controllers");

router.post("/", middleware.authentication, middleware.createToDoValidaton, controller.createTask);
router.get("/", middleware.authentication, controller.findUserToDos);
router.put("/:id", middleware.authentication, controller.updateTask);
router.delete("/:id", middleware.authentication, controller.deletTask);

module.exports = router;
