const db = require("./database");
const Sequelize = require("sequelize");

const Students = db.define("students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://image.freepik.com/free-photo/young-college-students-sitting-grass-park_13339-9748.jpg"
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      max: 4.0,
      min: 0.0
    }
  }
});

module.exports = Students;
