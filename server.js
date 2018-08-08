// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// this is from an old exercise
// require("./routes/post-api-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
const force = process.env.NODE_ENV !== "production";
const Answer = require("./models/answer.js")
const Question = require("./models/question.js")
// Answer.Question = Answer.belongsTo(Question)
// Question.Answer = Question.hasMany(Answer)
db.sequelize.sync({ force: true }).then(function() {
    var seeds = [];
  
    // Table created
    seeds.push(
        db.Question.create({
          text: "In mythology which planet was known as the God of Agriculture?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Jupiter',
              isCorrect: true,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Mars',
              isCorrect: false 
            })
          );
      
          return Promise.all(answers);
        })
      );
    
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
