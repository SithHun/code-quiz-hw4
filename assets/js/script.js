var startEl = document.querySelector('.start');
var containerEl = document.querySelector('.container');
var question1El = document.querySelector('.question1');
var question2El = document.querySelector('.question2');
var question3El = document.querySelector('.question3');
var question4El = document.querySelector('.question4');
var question5El = document.querySelector('.question5');
var question6El = document.querySelector('.question6');
var question7El = document.querySelector('.question7');
var question8El = document.querySelector('.question8');
var question9El = document.querySelector('.question9');
var question10El = document.querySelector('.question10');
var choice1El = document.querySelector('.choice1');
var choice2El = document.querySelector('.choice2');
var choice3El = document.querySelector('.choice3');
var choice4El = document.querySelector('.choice4');
var scoreBoard;
var timer;
var highScores;
var points = 0;
var questions = 1;

//Remove Are You Ready? and Start Button
startEl.addEventListener('click', removeElement);
choice1El.addEventListener('click', removeQ1, addPoints);
choice3El.addEventListener('click', removeQ2, addPoints);


//IF CONDITIONS
if (points === 1) {
        function removeQ1 () {
}}

//FUNCTIONS for if statements
function removeElement () {
    containerEl.remove();
    question1El.style.display = "";
}
function removeQ1 () {
    question1El.remove();
    question2El.style.display = "";
}
function removeQ2 () {
    question2El.remove();
    question3El.style.display = "";
}
function removeQ3 () {
    question3El.remove();
    question4El.style.display = "";
}
function removeQ4 () {
    question4El.remove();
    question5El.style.display = "";
}
function removeQ5 () {
    question5El.remove();
    question6El.style.display = "";
}
function removeQ6 () {
    question6El.remove();
    question7El.style.display = "";
}
function removeQ7 () {
    question7El.remove();
    question8El.style.display = "";
}
function removeQ8 () {
    question8El.remove();
    question9El.style.display = "";
}
function removeQ9 () {
    question9El.remove();
    question10El.style.display = "";
}

//ADD POINTS TO TRACK QUESTIONS
function addPoints (event) {
        points = points[i] + 1;
}