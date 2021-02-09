var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//this is a comment
function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}
color2.addEventListener("input", setGradient);
color1.addEventListener("input", setGradient);
function getRandomColorLeft() {
    var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    color1.value = randomColor;
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
  }
function getRandomColorRight() {
    var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    color2.value = randomColor;
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
  }
