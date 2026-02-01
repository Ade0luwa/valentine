const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");
const memories = document.getElementById("memories");
const card = document.querySelector(".card");

/* ===============================
   NO BUTTON — STAYS INSIDE CARD
   (Desktop + Mobile)
================================ */
function moveNoButton() {
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;

  const x = Math.random() * Math.max(0, maxX);
  const y = Math.random() * Math.max(0, maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* ===============================
   YES CLICK
================================ */
yesBtn.addEventListener("click", () => {
  message.textContent =
    "YAYYY 😍 I love you baby and can't wait to spend the day with you ❤️";

  secretBtn.classList.remove("hidden");
  memories.classList.remove("hidden");

  launchFireworks();
  spawnHearts();

  setTimeout(() => {
    message.textContent = "";
  }, 5000);
});

/* ===============================
   SECRET MESSAGE
================================ */
secretBtn.addEventListener("click", () => {
  secretMessage.classList.toggle("hidden");
});

/* ===============================
   FLOATING HEARTS
================================ */
function spawnHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "floatUp 3s ease-out forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

/* ===============================
   FIREWORKS (AUTO-CLEAR, SUBTLE)
================================ */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let fireworksTimeout;

function launchFireworks() {
  if (fireworksTimeout) clearTimeout(fireworksTimeout);

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      ctx.fillStyle = `hsl(${Math.random() * 360},100%,65%)`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.5,
        Math.random() * 3 + 1,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }, i * 15);
  }

  fireworksTimeout = setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 5000);
}

/* ===============================
   HEART ANIMATION KEYFRAMES
================================ */
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
