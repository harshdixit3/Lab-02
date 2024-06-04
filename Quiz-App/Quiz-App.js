

function Question (questionId,questionText){
    this.questionId = questionId;
    this.questionText = questionText;
}

const question1 = new Question(1, "Javascript Supports");

function Answer (answerText){

    this.answerText = answerText;
}

function AnswerOption (AnswerOptionText){
    this.AnswerOptionText = AnswerOptionText; 
}

const AnswerOption1 = new AnswerOption("Functions");
const AnswerOption2 = new AnswerOption("Xhtml");
const AnswerOption3 = new AnswerOption("Css");
const AnswerOption4 = new AnswerOption("Html");


const correctAnswer1 = new Answer("Fuctions")

const qaCombination1 = new QACombination(
    question1,correctAnswer1, [AnswerOption1,AnswerOption2,AnswerOption3,AnswerOption4]
)