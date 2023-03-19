
//------------Quiz Questions----------------
const quiz = [
    {
      question: "What does NaN mean in JavaScript?",
      choices: [
        "not a number",
        "null",
        "undefined",
        "none",
      ],
      answer: "not a number",
    },
    {
      question: "JavaScript allows the developer to make a webpage more interactive.",
      choices: [
        "true",
        "false",
      ],
      answer: "true",
    },
    {
        question: "Which of these is how a JavaScript function code looks like?",
        choices: [
          "function {}",
          "function []",
          "function =",
          "function ()",
        ],
        answer: "function ()",
      },
      {
        question: "JavaScript is a computer intepreter that reads coding languages.",
        choices: [
          "true",
          "false",
        ],
        answer: "false",
      },
      {
        question: "Difference between var and const in JavaScript?",
        choices: [
          "var can't be re-declared",
          "const is outdated",
          "const can't be re-declared",
          "there is no difference",
        ],
        answer: "const can't be re-declared",
      },
  ];
  
//-----Start Button-----
const startEl = document.querySelector("#container");
const buttonEl = document.querySelector("#button");
  
//-----Global Variables for Quiz-----
const quizcontainerEl = document.querySelector("#quiz");
const questionsEl = document.querySelector("#question");
const choicesEl  = document.querySelector("#choices");
const scorecontainerEl = document.querySelector("#score");
const resultscontainerEl = document.querySelector("#result");
const timerEl = document.querySelector('.timer');
const clearEl = document.querySelector('#clear');
const startoverEl = document.querySelector('#retry');
const narrationEl = document.querySelector('#narration');
const submissionEl = document.getElementById('submission');
const formEl = document.getElementById('form');
const leaderboardEl = document.getElementById('leaderboard');
  
let currentQuestion = 0;
let score = 0;
let time = 75;

//-----------Highscores variable------------
const li1El = document.getElementById('1');
const li2El = document.getElementById('2');
const li3El = document.getElementById('3');
const li4El = document.getElementById('4');
const li5El = document.getElementById('5');
  
//---------Start----------
function removeElement() {
    startEl.style.display = "none";
    quizcontainerEl.style.display = "";
    narrationEl.innerText = "";
    showQuestion();
    startTimer();
  }
  
  buttonEl.addEventListener('click', removeElement);

//-----------Timer----------
function startTimer() {
    const timerId = setInterval(function() {
      time--;
      if (time === 0 || score > 0) {
        clearInterval(timerId);
        showResults();
      }
      timerEl.textContent = 'Time: ' + time;
    }, 1000);
  }
  
//----------Quiz----------
function showQuestion() {
    const question = quiz[currentQuestion];
    questionsEl.innerHTML = question.question;
  
    choicesEl.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
      const choice = question.choices[i];
      const button = document.createElement("button");
      button.innerHTML = choice;
      button.addEventListener("click", function() {
        if (choice !== question.answer) {
          time -= 10;
        }
        currentQuestion++;
        if (currentQuestion < quiz.length) {
          showQuestion();
        } else {
          showResults();
        }
      });
      choicesEl.appendChild(button);
    }
  }
  
//------------Show End Results------------
function showResults() {
    score = time;
    quizcontainerEl.style.display = "none";
    scorecontainerEl.style.display = "";
    resultscontainerEl.innerText = "Your score is " + score;
    localStorage.setItem("highscore", score);
    leaderboardEl.style.display = "";
    narrationEl.innerText = "Leaderboard";
  }
  
//------------High Scores------------
const highscoresEl = document.querySelector(".highscores");
  
highscoresEl.addEventListener("click", view);

function view () {
    window.location.href = "leaderboard.html";
  }

//--------------Clear Local Storage-------------
// clearEl.addEventListener('click', clear);

// function clear() {
//     localStorage.clear();
//     score = 0;
//     resultscontainerEl.innerText = "Your score is " + score;
//     timerEl.innerText = "Time: ";
// }

//------------Start Over--------------
startoverEl.addEventListener('click', retry);

function retry() {
    scorecontainerEl.style.display = "none";
    startEl.style.display = "";
    score = 0;
    time = 75;
    currentQuestion = 0;
    timerEl.innerText = "Timer: 75";

}

//----------Leaderboard Submission----------
submissionEl.addEventListener('click', submit);

function submit(event) {
    event.preventDefault();
    formEl.style.display = "none";
    leaderboardEl.style.display = "";
}
