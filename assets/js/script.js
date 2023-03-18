const quiz = [
    {
        question: "What does NaN mean in JavaScript?",
        choices: [
            "Not a number",
            "Null",
            "Undefined",
            "None",
        ],
        answer: "Not a number",
    },
    {
        question: "JavaScript allows the developer to make a webpage more interactive.",
        choices: [
            "True",
            "False",
        ],
        answer: "True",
    },
];
//-----Start Button----
var startEl = document.querySelector("#container")
var buttonEl = document.querySelector("#button")

//-----Global Variables for Quiz-----
var quizcontainerEl = document.querySelector("#quiz");
var questionsEl = document.querySelector('#question');
var choicesEl  = document.querySelector('#choices');
var scorecontainerEl = document.querySelector("#score");
var resultscontainerEl = document.querySelector("#result")

let currentQuestion = 0;
let score = 0;


//---------Start----------

function removeElement () {
    startEl.remove();
    quizcontainerEl.style.display = "";
}

buttonEl.addEventListener('click', removeElement);

//----------Quiz----------

function showQuestion() {
    const question = quiz[currentQuestion];
    questionsEl.innerHTML = question.question;

    choicesEl.innerHTML = "";
    for (let i = 0; i < question.choice.length; i++) {
        const choice = question.choices[i];
        const button = document.createElement("button");
        button.innerText = choice;
        button.addEventListener("click", function (){
            if (choice === question.answer) {
                score++;
            }

            currentQuestion++;

            if (currentQuestion === quiz.length) {
                showScore();
                saveScore();
            } else {
                showQuestion();
            }
        });
        choicesEl.appendChild(button);
    }
}
