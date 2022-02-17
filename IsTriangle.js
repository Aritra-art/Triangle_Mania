var angle1 = document.querySelector("#angle-one");
var angle2 = document.querySelector("#angle-two");
var angle3 = document.querySelector("#angle-three");
var check = document.querySelector(".is-triangle");
var clear = document.querySelector(".clear");
var error = document.querySelector(".error");
var show = document.querySelector(".show");

check.addEventListener("click", checkEventHandler);
clear.addEventListener("click", clearEventHandler);

function checkEventHandler(){
  if(angle1.value!="" && angle2.value!="" && angle3.value!=""){
    error.style.display = "none";
    show.style.display = "block";
    if(Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180){
      show.innerText = `Yayy, the Angles ${angle1.value}, ${angle2.value}, ${angle3.value} forms a Triangle 💖`;
    }else{
      show.innerText = "oh ho !! the Angles do not form a Triangle 💔"
    }

  }else{
    error.style.display = "block";
    show.style.display = "none";
    error.innerText="Please enter all the angles of a Triangle"
  }
}

function clearEventHandler(){
  window.location.reload();
}