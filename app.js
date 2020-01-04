//Тоглогчийн ээлжийг хадгалах хувьсагч

var activePlayer = 0,
  score,
  roundScore;
// Тоглоом дууссанг эсэхийг хадгалах төлвийн хувьсагч
var isGameOver;
var diceDom = document.querySelector(".dice");
//Тоглоомыг эхлүүлэх
initGame();
// Тоглоом эхлэх
function initGame() {
  // Тоглоом эхэллэ гэдэг төлөвт оруулна
  isGameOver = false;
  activePlayer = 0;
  score = [0, 0];
  roundScore = 0;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  //winner tagiin ustgaw
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  //эхний тоглогчид new Хийхэд эхлүүлэх эрх өгөх
  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}
//throw dice listener ~~~
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isGameOver === false) {
    //1-6 hurtel sanamsargv too -g awna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    roundScore += diceNumber;
    diceDom.style.display = "block";
    //shoo-g zurgiin taaruulj gargah
    diceDom.src = "dice-" + diceNumber + ".png";
    if (diceNumber !== 1) {
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    }

    // 1 Буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
    else {
      SwitchToNextPlayer();
    }
  }
});

//hold towchnii event listner
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isGameOver === false) {
    // уг тоглогч нь өөриййн current оноог score оноолуугаа хийнэ.
    score[activePlayer] += roundScore;
    // Оноог нь дэлгэцлэх
    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];

    //Тоглогч хожсон эсэхийг шалгах буюу 100 Гаас их гэдгийг шалгана
    if (score[activePlayer] >= 100) {
      //Тоглоомыг дууссан төлөвт шилжүүлнэ
      isGameOver = true;
      document.getElementById("name-" + activePlayer).textContent = "WINNER";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      activePlayer === 0
        ? alert("Player 1 Та хожлоо хөөрхөн юм")
        : alert("Player 2 та хожлоо гэхдэ суга юм ");
    } else {
      //Ээлжийн оноог 0 болгоно тэр оноог авсан учир
      SwitchToNextPlayer();
    }
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
//new game буюу шинэ тоглоом эхлэх листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
