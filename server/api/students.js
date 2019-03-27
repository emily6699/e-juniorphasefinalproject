const router = require("express").Router();
const { Students } = require("../db");

//returns all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Students.findAll();
    res.send(students);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
