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
    const student = await Students.create(req.body);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

// eslint-disable-next-line quotes
router.delete("/:id", async (req, res, next) => {
  console.log("studentDELETE", req.params.id);
  try {
    const studentId = Number(req.params.id);
    const student = await Students.findById(studentId);
    if (!student) return next();
    student.destroy();
    res.json(student);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    let student = await Students.findById(id);
    if (!student) return next();
    student = await student.update(req.body);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
