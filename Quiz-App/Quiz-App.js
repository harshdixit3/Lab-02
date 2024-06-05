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
  }

const AnswerOption_Functions = new AnswerOption("Functions");
const AnswerOption_XHTML = new AnswerOption("Xhtml");
const AnswerOption_CSS = new AnswerOption("Css");
const AnswerOption_HTML = new AnswerOption("Html");



const qaCombination1 = new QACombination(question1, correctAnswer1, [
    AnswerOption_Functions,
    AnswerOption_XHTML,
    AnswerOption_CSS,
    AnswerOption_HTML,
]);

const AnswerOption_JQuary = new AnswerOption("JQuary");
const AnswerOption_XML = new AnswerOption("XML");

const qaCombination2 = new QACombination(question2, correctAnswer2, [
    AnswerOption_HTML,
    AnswerOption_JQuary,
    AnswerOption_CSS,
    AnswerOption_XML,
  ]);
