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

function AnswerOption(AnswerOptionText) {
  this.AnswerOptionText = AnswerOptionText;
}

function QACombination(questionObj, CurrectAnswerObj, answerOptions) {
  this.questionObj = questionObj;
  this.CurrectAnswerObj = CurrectAnswerObj;
  this.AnswerOption = answerOptions;

  // check the user answer
  // verifyUSerAnswer(userAnswerText)

  this.verifyUserAnswer = function (userSuppliedAnswer) {
    if (userSuppliedAnswer == correctAnswerObj.correctAnswereText) {
      console.log("True -> User Supplied Answere -> " + userSuppliedAnswer);
      return true;
    } else {
      console.log("False -> User Supplied Answer -> " + userSuppliedAnswer);
      return false;
    }
  };
}

const AnswerOption_Functions = new AnswerOption("Functions");
const AnswerOption_XHTML = new AnswerOption("Xhtml");
const AnswerOption_CSS = new AnswerOption("Css");
const AnswerOption_HTML = new AnswerOption("Html");

const qaCombination1 = new qaCombination1(question1, correctAnswer1, [
  AnswerOption_Functions,
  AnswerOption_XHTML,
  AnswerOption_CSS,
  AnswerOption_HTML,
]);

const AnswerOption_JQuary = new AnswerOption("JQuary");
const AnswerOption_XML = new AnswerOption("XML");

const qaCombination2 = new qaCombination1(question2, correctAnswer2, [
  AnswerOption_HTML,
  AnswerOption_JQuary,
  AnswerOption_CSS,
  AnswerOption_XML,
]);

const AnswerOption_Python = new AnswerOption("Python Scriopt");
const AnswerOption_Django = new AnswerOption("Django");
const AnswerOption_NodeJS = new AnswerOption("NodeJS");

const qaCombination3 = new qaCombination1(question3, correctAnswer3, [
  AnswerOption_Python,
  AnswerOption_JQuary,
  AnswerOption_Django,
  AnswerOption_NodeJS,
]);

const AnswerOption_PHP = new AnswerOption("PHP");
const AnswerOption_JS = new AnswerOption("JS");
const AnswerOption_ALL = new AnswerOption("ALL");

const qaCombination4 = new qaCombination1(question4, correctAnswer4, [
  AnswerOption_PHP,
  AnswerOption_HTML,
  AnswerOption_JS,
  AnswerOption_ALL,
]);

const AnswerOption_Language = new AnswerOption("Language");
const AnswerOption_ProgramingLanguage = new AnswerOption("Programing Language");
const AnswerOption_Devlopment = new AnswerOption("Devlopment");

const qaCombination5 = new qaCombination1(question5, correctAnswer5, [
  AnswerOption_Language,
  AnswerOption_ProgramingLanguage,
  AnswerOption_Devlopment,
  AnswerOption_ALL,
]);

function QuizApp(QACombination) {
  this.QACombination = QACombination;

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

  this.CalculateScorePercentage = function () {
    const totalNoOfQuestions = QACombination.length;
    const scorePercentage = (this.getScore() / totalNoOfQuestions) * 100;
    return scorePercentage;
  };

  //Task
  // Check for the lastQACombination
  // isLastQACombination
  //[1 / 5] -> False
  //[5 / 5 ] -> true

  this.isLastQAcombination = function () {
    const totalNoOfQuestions = QACombination.length;

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

    const QACombination = this.QACombination[this.pageIndex];

    const questionId = QACombination.questionObj.questionId;

    const totalNoOfQuestions = QACombination.length;

    const content = `Question ${questionId} of ${totalNoOfQuestions}`;

    progressElement.innerHTML = content;
  };
}

const quizApp = new QuizApp([
  qaCombination1,
  qaCombination2,
  qaCombination3,
  qaCombination4,
  qaCombination5,
]);
