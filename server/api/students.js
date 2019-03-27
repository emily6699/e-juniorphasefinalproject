const router = require("express").Router();
const { Campuses, Students } = require("../db");

//returns all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Students.findAll();
    res.send(students);
  } catch (error) {
    next(error);
  }
});

//returns a specific student including the student's campus
router.get("/:studentId", async (req, res, next) => {
  try {
    const studentId = Number(req.params.studentId);
    const student = await Students.find({
      where: {
        id: studentId
      },
      include: [{ model: Campuses }]
    });

    if (!student) {
      next();
    } else {
      res.send(student);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(204).send();
    res.send(student.dataValues);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
