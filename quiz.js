var quizForm = document.querySelector(".quiz-form");
var check = document.querySelector(".submit");
var clear = document.querySelector(".clear");
var show = document.querySelector(".show");

var correctAnswers = [
  "90°",
  "right-angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral Triangle",
  "100°",
  "30°",
];

clear.addEventListener("click", clearEventHandler);
check.addEventListener("click", checkEventHandler);

function clearEventHandler() {
  show.textContent = "";
}

function checkEventHandler() {
  var index = 0;
  var score = 0;
  var formResults = new FormData(quizForm);
  for (var value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  show.innerText = `Your Score is ${score}`;
}
