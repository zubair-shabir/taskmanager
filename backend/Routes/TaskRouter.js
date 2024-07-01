const {
  createTask,
  fetchAllTasks,
  updateTaskById,
  DeleteTaskById,
} = require("../Controllers/TaskController");
const router = require("express").Router();

router.get("/", fetchAllTasks);

router.post("/", createTask);

router.put("/:id", updateTaskById);

router.delete("/:id", DeleteTaskById);

module.exports = router;
