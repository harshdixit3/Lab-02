//creating ALL Questions and their Options

function Question(questionId, questionText) {
  this.questionId = questionId;
  this.questionText = questionText;
}

const question1 = new Question(1, "Javascript Supports");
const question2 = new Question(
  2,
  "Which Language is used for Styling web Pages?"
);
const question3 = new Question(3, "Which is not a javascript FrameWork?");
const question4 = new Question(4, "Which is used to connect to Database?");
const question5 = new Question(5, "Javascript is a ");

function CurrectAnswer(CurrectAnswerText) {
  this.CurrectAnswerText = CurrectAnswerText;
}

const correctAnswer1 = new CurrectAnswer("Fuctions");
const correctAnswer2 = new CurrectAnswer("Css");
const correctAnswer3 = new CurrectAnswer("Python Script");
const correctAnswer4 = new CurrectAnswer("PHP");
const correctAnswer5 = new CurrectAnswer("Programing Language");

function AnswerOption(answerOptionText) {
  this.answerOptionText = answerOptionText;
}

function QACombination(questionObj, currectAnswerObj, answerOptions) {
  this.questionObj = questionObj;
  this.CurrectAnswerObj = currectAnswerObj;
  this.answerOptions = answerOptions;

  // check the user answer
  // verifyUSerAnswer(userAnswerText)

  this.verifyUserAnswer = function (userSuppliedAnswer) {
    if (userSuppliedAnswer == correctAnswer1.correctAnswereText) {
      console.log("True -> User Supplied Answere -> " + userSuppliedAnswer);
      return true;
    } else {
      console.log("False -> User Supplied Answer -> " + userSuppliedAnswer);
      return false;
    }
  };
}

const answerOption_Functions = new AnswerOption("Functions");
const answerOption_XHTML = new AnswerOption("Xhtml");
const answerOption_CSS = new AnswerOption("Css");
const answerOption_HTML = new AnswerOption("Html");

const qaCombination1 = new QACombination(question1, correctAnswer1, [
  answerOption_Functions,
  answerOption_XHTML,
  answerOption_CSS,
  answerOption_HTML,
]);

const answerOption_JQuary = new AnswerOption("JQuary");
const answerOption_XML = new AnswerOption("XML");

const qaCombination2 = new QACombination(question2, correctAnswer2, [
  answerOption_HTML,
  answerOption_JQuary,
  answerOption_CSS,
  answerOption_XML,
]);

const answerOption_Python = new AnswerOption("Python Scriopt");
const answerOption_Django = new AnswerOption("Django");
const answerOption_NodeJS = new AnswerOption("NodeJS");

const qaCombination3 = new QACombination(question3, correctAnswer3, [
  answerOption_Python,
  answerOption_JQuary,
  answerOption_Django,
  answerOption_NodeJS,
]);

const answerOption_PHP = new AnswerOption("PHP");
const answerOption_JS = new AnswerOption("JS");
const answerOption_ALL = new AnswerOption("ALL");

const qaCombination4 = new QACombination(question4, correctAnswer4, [
  answerOption_PHP,
  answerOption_HTML,
  answerOption_JS,
  answerOption_ALL,
]);

const answerOption_Language = new AnswerOption("Language");
const answerOption_ProgramingLanguage = new AnswerOption("Programing Language");
const answerOption_Devlopment = new AnswerOption("Devlopment");

const qaCombination5 = new QACombination(question5, correctAnswer5, [
  answerOption_Language,
  answerOption_ProgramingLanguage,
  answerOption_Devlopment,
  answerOption_ALL,
]);

function QuizApp(qaCombination) {
  this.qaCombination = qaCombination;

  //Task
  // DEfine PAgeNo/PageINdex Propoerty

  this.pageIndex = 0;

  //Task
  //Get Score

  this.score = 0;

  this.getScore = function () {
    return this.score;
  };

  //Task
  //incrementScore()

  this.incrementScore = function () {
    this.score = this.score + 1;
  };

  //Task
  // CalculateScorePercentage()

  this.calculateScorePercentage = function () {
    const totalNoOfQuestions = qaCombination.length;
    const scorePercentage = (this.getScore() / totalNoOfQuestions) * 100;
    return scorePercentage;
  };

  //Task
  // Check for the lastQACombination
  // isLastQACombination
  //[1 / 5] -> False
  //[5 / 5 ] -> true

  this.isLastQAcombination = function () {
    const totalNoOfQuestions = qaCombination.length;

    if (this.pageIndex == totalNoOfQuestions - 1) {
      return true;
    } else {
      return false;
    }
  };

  // Task
  // UpdateFooter

  this.updateFooter = function () {
    const progressElement = document.getElementById("progress");

    const qaCombination = qaCombination[this.pageIndex];

    const questionId = qaCombination.questionObj.questionId;

    const totalNoOfQuestions = qaCombination.length;

    const content = `Question ${questionId} of ${totalNoOfQuestions}`;

    progressElement.innerHTML = content;
  };

  this.addListeners = function(){

    for ( let index = 0; index < 4 ; index ++ ){

      const buttonId = "Btn" + index;

      const buttonObj = document.getElementById(buttonId);

      buttonObj.onclick = function(event) {

        const target = event.currentTarget;
        console.log("Target is " + JSON.stringify(target));
      }
    }

  }

  this.load = function(){

    
    this.addListeners();


  }

  //displayquizpage
  //displayQAcombinationObj -> pageIndex

  //update question obj
  //displayFooter
}

const quizApp = new QuizApp([
  qaCombination1,
  qaCombination2,
  qaCombination3,
  qaCombination4,
  qaCombination5,
]);


quizApp.load();