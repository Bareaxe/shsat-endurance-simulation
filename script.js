const questions = [
  { text: "Question 1 (Easy): 5 + 7 = ?", options: ["10","12","14","15"], answer: 1, difficulty: "easy" },
  { text: "Question 2 (Moderate): 3x = 12, x = ?", options: ["2","3","4","5"], answer: 2, difficulty: "moderate" },
  { text: "Question 3 (Hard): What is the slope of line through (2,3) & (5,9)?", options: ["2","3","1","6"], answer: 0, difficulty: "hard" },
  // Add up to 10–20 questions for simulation
];

let current = 0;
let elapsed = 0;
let timer;
const timerDisplay = document.getElementById("timer");
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const progress = document.getElementById("progress");
const startBtn = document.getElementById("start-btn");
const microBtn = document.getElementById("micro-reset");
const results = document.getElementById("results");
const summary = document.getElementById("summary");

startBtn.addEventListener("click", startSimulation);
microBtn.addEventListener("click", microReset);

function startSimulation() {
  startBtn.style.display = "none";
  showQuestion();
  timer = setInterval(() => {
    elapsed++;
    timerDisplay.textContent = `Time Elapsed: ${Math.floor(elapsed/60)}:${elapsed%60 < 10 ? '0'+elapsed%60 : elapsed%60}`;
  }, 1000);
}

function showQuestion() {
  if(current >= questions.length){
    endSimulation();
    return;
  }
  const q = questions[current];
  questionText.textContent = q.text;
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => answerQuestion(idx);
    optionsDiv.appendChild(btn);
  });
  progress.textContent = `Progress: ${current} / ${questions.length}`;
}

function answerQuestion(selected) {
  const q = questions[current];
  // You could track correct answers or speed here if desired
  current++;
  showQuestion();
}

function microReset() {
  alert("Take 2–3 deep breaths! Focus and continue.");
}

function endSimulation() {
  clearInterval(timer);
  document.getElementById("simulation").style.display = "none";
  results.classList.remove("hidden");
  summary.textContent = `You completed ${questions.length} questions in ${Math.floor(elapsed/60)}:${elapsed%60 < 10 ? '0'+elapsed%60 : elapsed%60}. Great work on practicing focus and endurance!`;
}
