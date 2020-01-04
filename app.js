//Тоглогчийн ээлжийг хадгалах хувьсагч

var activePlayer = 1;
// Тоглогчдын оноог хадгалах хувьсагч
var score = [0, 0];
//Хэдэн роунд вэ?
var roundScore = 0;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.round(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
