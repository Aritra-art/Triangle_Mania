var quizForm = document.querySelector(".quiz-form");
var check = document.querySelector(".submit");

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

check.addEventListener("click", checkEventHandler);

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
