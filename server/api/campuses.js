const router = require("express").Router();
const { Campuses } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campuses.findAll();
    res.send(campuses);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
