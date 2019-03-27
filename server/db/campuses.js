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
      "https://mytakeonphotography.files.wordpress.com/2012/07/a-view-of-the-law-library-at-the-university-of-michigan-from-inside-the-law-quad-e1342318572899.jpg",
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
