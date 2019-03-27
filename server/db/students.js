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
      "https://images-na.ssl-images-amazon.com/images/I/519lO0ecWRL._SX425_.jpg"
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
