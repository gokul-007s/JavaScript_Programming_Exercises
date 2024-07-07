// Using the same function with multiple objects

var quiz1;
var quiz2;
var quiz3;
var quiz;
var showQuiz;

quiz1 = {
    question: "What is the capital of France?",
    options: "A) Berlin, B) Paris, C) London, D) Rome",
    answer: "B) Paris"
};

quiz2 = {
    question: "What is the largest planet in our solar system?",
    options: "A) Earth, B) Saturn, C) Jupiter, D) Uranus",
    answer: "C) Jupiter"
};

quiz3 = {
    question: "What is the smallest country in the world?",
    options: "A) Vatican City, B) Monaco, C) Nauru, D) Tuvalu",
    answer: "A) Vatican City"
};

showQuiz = function () {
    console.log("Quiz question:");
    console.log("------------------------------");
    console.log(quiz.question);
    console.log(quiz.options);
    console.log("Answer: " + quiz.answer);
    console.log("------------------------------");
};

quiz = quiz1;
showQuiz();

quiz = quiz2;
showQuiz();

quiz = quiz3;
showQuiz();


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */