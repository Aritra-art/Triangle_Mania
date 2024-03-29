var base = document.querySelector(".base");
var height = document.querySelector(".height");
var check = document.querySelector(".hypotenuse");
var clear = document.querySelector(".clear");
var error = document.querySelector(".error");
var show = document.querySelector(".show");

check.addEventListener("click", hypotenuseEventHandler);
clear.addEventListener("click", clearEventHandler);

function clearEventHandler() {
  base.value = "";
  height.value = "";
  error.style.display = "none";
  show.style.display = "none";
}

function hypotenuseEventHandler() {
  if (base.value != "" && height.value != "") {
    if (Number(base.value) > 0 && Number(height.value) > 0) {
      show.style.display = "block";
      error.style.display = "none";
      var baseFinal = Number(base.value);
      var heightFinal = Number(height.value);
      var hypotenuse = Number(
        Math.sqrt(Math.pow(baseFinal, 2) + Math.pow(heightFinal, 2))
      );
      show.innerText = `The Hypotunuse of the given base: ${baseFinal} and height: ${heightFinal} is ${hypotenuse.toFixed(
        2
      )}`;
    } else {
      show.style.display = "none";
      error.style.display = "block";
      error.textContent =
        "The Base and Height both should be Positive of a Triangle";
    }
  } else {
    show.style.display = "none";
    error.style.display = "block";
    error.innerText = "Please enter both base and height to get the hypotenuse";
  }
}
