function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClicked() {
  document.querySelector(".question").style.display = "none";
  document.getElementById("finalMessage").style.display = "block";
}

function playMusic() {
  document.getElementById("bg-music").play();
}
