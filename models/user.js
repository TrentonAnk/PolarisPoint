// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "subject" model that matches up with DB
var user = sequelize.define("User", {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        len: [6,12]
      }
  },
  gems: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  canEarn: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

// Syncs with DB
User.sync();

// Makes the Subject Model available for other files (will also create a table)
module.exports = User;