/* eslint-disable quotes */
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
    const student = await Students.create(req.body.state);
    const campus = await Campuses.findById(req.body.campusId);
    await student.setCampus(campus);
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line quotes
router.delete("/:studentId", async (req, res, next) => {
  const studentId = Number(req.params.studentId);
  const student = await Students.findById(studentId);

  if (student === null) {
    res.status(404).send();
  } else {
    await Students.destroy({
      where: {
        id: studentId
      }
    });
    res.status(204).send();
  }
});

router.put("/:studentId", async (req, res, next) => {
  const studentId = Number(req.params.studentId);
  const student = await Students.findById(studentId);

  if (student === null) {
    res.status(404).send();
  } else {
    await student.update({
      ...req.body
    });
    res.status(204).send();
  }
});

module.exports = router;
