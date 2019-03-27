const Sequelize = require("sequelize");
const db = require("./database");

const Campuses = db.define("campuses", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxv1VS1kuy8Jf3grnnkymZ0OiUpPeXEJZKoy-NgYJnRLKd_U6",
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Campuses;
