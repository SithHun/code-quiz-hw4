// const quiz = [
//     {
//         question: "What does NaN mean in JavaScript?",
//         choices: [
//             "Not a number",
//             "Null",
//             "Undefined",
//             "None",
//         ],
//         answer: "Not a number",
//     },
//     {
//         question: "JavaScript allows the developer to make a webpage more interactive.",
//         choices: [
//             "True",
//             "False",
//         ],
//         answer: "True",
//     },
// ];
// //-----Start Button----
// var startEl = document.querySelector("#container")
// var buttonEl = document.querySelector("#button")

// //-----Global Variables for Quiz-----
// var quizcontainerEl = document.querySelector("#quiz");
// var questionsEl = document.querySelector('#question');
// var choicesEl  = document.querySelector('#choices');
// var scorecontainerEl = document.querySelector("#score");
// var resultscontainerEl = document.querySelector("#result")

// let currentQuestion = 0;
// let score = 0;


// //---------Start----------

// function removeElement () {
//     startEl.remove();
//     quizcontainerEl.style.display = "";
// }

// buttonEl.addEventListener('click', removeElement, showQuestion);

// //----------Quiz----------

// function showQuestion() {
//     const question = quiz[currentQuestion];
//     questionsEl.innerHTML = question.question;

//     choicesEl.innerHTML = "";
//     for (let i = 0; i < question.choices.length; i++) {
//         const choice = question.choices[i];
//     }
// }










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
  const startEl = document.querySelector("#container");
  const buttonEl = document.querySelector("#button");
  
  //-----Global Variables for Quiz-----
  const quizcontainerEl = document.querySelector("#quiz");
  const questionsEl = document.querySelector("#question");
  const choicesEl  = document.querySelector("#choices");
  const scorecontainerEl = document.querySelector("#score");
  const resultscontainerEl = document.querySelector("#result");
  
  let currentQuestion = 0;
  let score = 0;
  
  //---------Start----------
  function removeElement() {
    startEl.remove();
    quizcontainerEl.style.display = "";
    showQuestion();
  }
  
  buttonEl.addEventListener('click', removeElement);
  
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
        if (choice === question.answer) {
          score++;
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
  
  function showResults() {
    quizcontainerEl.style.display = "none";
    scorecontainerEl.style.display = "";
    resultscontainerEl.innerHTML = `Your score is ${score}`;
    localStorage.setItem("highscore", score);
  }
  
  //------------High Scores------------
  const highscoresEl = document.querySelector(".highscores");
  
  highscoresEl.addEventListener("click", function() {
    const highscore = localStorage.getItem("highscore");
    if (highscore) {
      alert(`Your high score is ${highscore}`);
    } else {
      alert("There are no high scores yet.");
    }
  });
  