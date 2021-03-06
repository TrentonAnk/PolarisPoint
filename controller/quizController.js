const db = require("../models");

// Defining methods for the quizController
module.exports = {
  findAllWhereCatMatches: function(req, res) {
    db.Question
      .findAll({where: {
        category: req.params.category
      }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}