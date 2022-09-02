var base = document.querySelector(".base");
var height = document.querySelector(".height");
var check = document.querySelector(".area");
var clear = document.querySelector(".clear");
var error = document.querySelector(".error");
var show = document.querySelector(".show");

clear.addEventListener("click", clearEventHandler);
check.addEventListener("click", checkEventHandler);

function clearEventHandler() {
  base.value = "";
  height.value = "";
  show.style.display = "none";
  error.style.display = "none";
}

function checkEventHandler() {
  if (base.value != "" && height.value != "") {
    if (Number(base.value) > 0 && Number(height.value) > 0) {
      error.style.display = "none";
      show.style.display = "block";
      var area = 0.5 * (Number(base.value) * Number(height.value));
      show.innerText = `The Area of a triangle whose base is ${base.value} and height is ${height.value} is ${area} square units`;
    } else {
      error.style.display = "block";
      show.style.display = "none";
      error.textContent =
        "The Base and Height both should be Positive of a Triangle";
    }
  } else {
    error.style.display = "block";
    show.style.display = "none";
    error.innerText = "Please enter both the values";
  }
}
