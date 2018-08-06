// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "subject" model that matches up with DB
var subject = sequelize.define("Subject", {
  question: {
    type: Sequelize.STRING,
    notNull: true
  },
  correct: {
    type: Sequelize.STRING,
    notNull: true
  },
  incorrect1: {
    type: Sequelize.STRING,
    notNull: true
  },
  incorrect2: {
    type: Sequelize.STRING,
    notNull: true
  },
  incorrect3: {
    type: Sequelize.STRING,
    notNull: true
  }
});

// Syncs with DB
Subject.sync();

// Makes the Subject Model available for other files (will also create a table)
module.exports = Subject;