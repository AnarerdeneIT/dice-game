//Тоглогчийн ээлжийг хадгалах хувьсагч

var activePlayer = 0;
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

//throw dice listener ~~~
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1-6 hurtel sanamsargv too -g awna
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  roundScore += diceNumber;
  diceDom.style.display = "block";
  //shoo-g zurgiin taaruulj gargah
  diceDom.src = "dice-" + diceNumber + ".png";
  if (diceNumber !== 1) {
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  }

  // 1 Буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
  else {
    SwitchToNextPlayer();
  }
});

//hold towchnii event listner
document.querySelector(".btn-hold").addEventListener("click", function() {
  // уг тоглогч нь өөриййн current оноог score оноолуугаа хийнэ.
  score[activePlayer] += roundScore;
  // Оноог нь дэлгэцлэх
  document.getElementById("score-" + activePlayer).textContent =
    score[activePlayer];

  //Тоглогч хожсон эсэхийг шалгах буюу 100 Гаас их гэдгийг шалгана
  if (score[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");

    activePlayer === 0
      ? alert("Анар-эрдэнэ Та хожлоо хөөрхөн юм")
      : alert("Ундаръяа та хожлоо гэхдэ суга юм ");
  } else {
    //Ээлжийн оноог 0 болгоно тэр оноог авсан учир
    SwitchToNextPlayer();
  }
});

function SwitchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //Тоглогчийн ээлжийг энэ хэсэгт өөрчилнө..
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүл
  document.querySelector(".player-0-panel").classList.toggle("active");

  document.querySelector(".player-1-panel").classList.toggle("active");

  //Шоог түр алга болгоно.
  diceDom.style.display = "none";
}
