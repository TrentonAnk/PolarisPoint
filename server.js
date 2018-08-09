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
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Mercury',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Venus',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "Between which two planets do most asteroids orbit the sun?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Venus and Earth',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Earth and Mars',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Mars and Jupiter',
              isCorrect: true 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Jupiter and Saturn',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "Earth's atmosphere is composed primarily of _____________.",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Hydrogen and Nitrogen',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Oxygen and Methane',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Carbon Dioxide and Nitrogen',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Oxygen and Nitrogen',
              isCorrect: true 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "About how many satellites or moons are there orbiting the planets of our solar system?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '60',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '80',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '110',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '140',
              isCorrect: true 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "Who discovered that Earth and the other planets in our solar system orbit our sun?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Galileo',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Copernicus',
              isCorrect: true 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Newton',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Einstein',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "Which planet has the largest ring system in our solar system?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Saturn',
              isCorrect: true,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Jupiter',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Neptune',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Uranus',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "Which is not a Jovian planet?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Jupiter',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Mars',
              isCorrect: true 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Neptune',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Uranus',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "Which planet is closet to the sun?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Venus',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Mars',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Earth',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Mercury',
              isCorrect: true 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "Which of the following planets is considred an ice giant?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Jupiter',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Saturn',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Uranus',
              isCorrect:  true
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Pluto',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "How long ago did the Milky Way come into existence?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '2 billion years ago',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '3.5 billion years ago',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '4.5 billion years ago',
              isCorrect: true 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '5 billion years ago',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "What is the Oort Cloud?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'The home of comets in our solar system',
              isCorrect: true,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'The rings of Saturn',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'The asteroid belt',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'The area of asteroids where Pluto orbits',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "Which of the following is a characteristic of terrestrial planets?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Relatively small in size',
              isCorrect: true,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Rings',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Many moons',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Mostly made of gas',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "Which one of the following is a characteristic of Jovian planets?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Orbit close to the sun',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Normally contain rings',
              isCorrect: true 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Relatively small in size',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'Mostly made of rocky material',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "What percent of stars in our galaxy have planetary systems?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '15%',
              isCorrect: true,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '30%',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '45%',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: '60%',
              isCorrect: false 
            })
          );
          return Promise.all(answers);
        })
      );
      seeds.push(
        db.Question.create({
          text: "What is a magentosphere?",
          category: "Astronomy"
        })
        .then(question => {
          const answers = [];
          
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'A magnetic field created by solar flares',
              isCorrect: false,      
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'A magnetic field created by iron asteroids',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'A magnetic ring created by rotating moons',
              isCorrect: false 
            })
          );
          answers.push(
            db.Answer.create({
              QuestionId: question.get('id'),
              text: 'A magnetic field created by spinning planets',
              isCorrect: true 
            })
          );
          return Promise.all(answers);
        })
      ); 
      
    
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
