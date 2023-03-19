const scoresEl = document.querySelector("#scoreslist");

// Retrieve high score from local storage
const highscore = localStorage.getItem("highscore");

// If there is a high score, add it to the leaderboard
if (highscore) {
    const li = document.createElement("li");
    li.textContent = `Your high score is ${highscore}`;
    scoresEl.appendChild(li);
} else {
    const li = document.createElement("li");
    li.textContent = "There are no high scores yet.";
    scoresEl.appendChild(li);
    }
//Clear Function
const clearEl = document.querySelector('#clear');
clearEl.addEventListener('click', clear);
const leaderboardEl = document.querySelector('#buttonleaderboard');

function clear() {
    if (highscore > 0) {
        localStorage.clear();
        leaderboardEl.closest('li').remove();
    }
}
//Go Back Function
const gobackEl = document.querySelector('#back');

gobackEl.addEventListener('click', goback);

function goback () {
    window.location.href ="index.html";
}