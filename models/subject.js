// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "subject" model that matches up with DB
var subject = sequelize.define("Subject", {
  question: {
    type: Sequelize.STRING,
    allowNull: false
  },
  correct: {
    type: Sequelize.STRING,
    allowNull: false
  },
  incorrect1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  incorrect2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  incorrect3: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Syncs with DB
Subject.sync();

// Makes the Subject Model available for other files (will also create a table)
module.exports = Subject;