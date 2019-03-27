/* eslint-disable quotes */
const router = require("express").Router();
const { Campuses, Students } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campuses.findAll();
    res.send(campuses);
  } catch (error) {
    next(error);
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
    res.status(204).send(campus.dataValues);
  } catch (error) {
    next(error);
  }
});

router.delete("/:campusId", async (req, res, next) => {
  const campusId = Number(req.params.campusId);
  const campus = await Campuses.findById(campusId);

  if (campus === null) {
    res.status(404).send();
  } else {
    await Campuses.destroy({
      where: {
        id: campusId
      }
    });
    res.status(204).send();
  }
});

router.put("/:campusId", async (req, res, next) => {
  const campusId = Number(req.params.campusId);
  const campus = await Campuses.findById(campusId);

  if (campus === null) {
    res.status(404).send();
  } else {
    await campus.update({
      ...req.body
    });
    res.status(204).send();
  }
});

module.exports = router;
