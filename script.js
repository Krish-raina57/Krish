// Gate page
const wrongs = [
  "Hmm 🤔 Not quite…",
  "Nope 😌 Try again",
  "Hint 💡 The name I whisper",
  "Wrong ❌ but cute",
  "Almost… but not yet ❤️"
];

function checkAnswer() {
  const val = document.getElementById("answer").value.toLowerCase().trim();
  const msg = document.getElementById("msg");

  if (val === "samy") {
    window.location.href = "journey.html";
  } else {
    msg.innerText = wrongs[Math.floor(Math.random() * wrongs.length)];
    msg.style.color = "#ff5c8a";
  }
}

// Journey page
function goFinal() {
  window.location.href = "final.html";
}

// Final page
let noSize = 1;

function noClicked() {
  const no = document.getElementById("no");
  noSize -= 0.15;
  no.style.transform = `scale(${noSize})`;
  no.style.position = "absolute";
  no.style.left = Math.random() * 80 + "%";
  no.style.top = Math.random() * 80 + "%";
}

function yesClicked() {
  document.querySelector(".buttons").style.display = "none";
  const msg = document.getElementById("finalMsg");
  msg.classList.remove("hidden");
  msg.style.animation = "fadeUp 1.2s ease";
}
