/* eslint-disable quotes */
const router = require("express").Router();
const { Campuses, Students } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campuses.findAll();
    res.send(campuses);
  } catch (err) {
    next(err);
  }
});

//returns one campus including the campus' students
router.get("/:campusId", async (req, res, next) => {
  try {
    const campusId = Number(req.params.campusId);
    const campus = await Campuses.find({
      where: {
        id: campusId
      },
      include: [{ model: Students }]
    });

    if (!campus) {
      next();
    } else {
      res.send(campus);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const campus = await Campuses.create(req.body);
    res.json(campus);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const campus = await Campuses.findById(id);
    if (!campus) return next();
    campus.destroy();
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

router.put("/:campusId", async (req, res, next) => {
  try {
    const campusId = Number(req.params.campusId);
    let campus = await Campuses.findById(campusId);
    if (!campus) return next();
    campus = await campus.update(req.body);
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
