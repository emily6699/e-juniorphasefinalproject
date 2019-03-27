const router = require("express").Router();
const { Student } = require("../db");

//returns all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
