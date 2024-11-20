
let score1 = 0
let score2 = 0
let timerInterval;
let totalTime = 0;
let isRunning = false;


function addScore(team) {
    if (team === 1) {
        score1++;
        document.getElementById("fcb-btn").innerText = score1;
    }
    else if (team === 2) {
        score2++;
        document.getElementById("rma-btn").innerText = score2;
    }    
}

function formatTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return minutes + ":" + seconds;
}

function updateTimer() {
    totalTime++;
    document.getElementById("timer").innerText = formatTime(totalTime);
}

function startGame() {
    if (isRunning) return; // Prevent multiple starts

    isRunning = true;
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    timerInterval = setInterval(updateTimer, 1000); // Update every second
}

function stopGame() {
    isRunning = false;
    clearInterval(timerInterval);

    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function resetGame() {
    // Reset scores
    score1 = 0;
    score2 = 0;

    // Reset timer
    totalTime = 0;

    // Update UI elements
    document.getElementById("fcb-btn").innerText = score1;
    document.getElementById("rma-btn").innerText = score2;
    document.getElementById("timer").innerText = formatTime(totalTime);

    // Stop the game if it's running
    if (isRunning) {
        stopGame();
    }

    // Re-enable the Start button and ensure Stop is disabled
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}


