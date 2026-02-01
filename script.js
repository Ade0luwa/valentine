const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");
const memories = document.getElementById("memories");
const card = document.querySelector(".card");

const nopeTexts = [
  "Nope 😌",
  "I said no is not an answer 😤",
  "Try again 😏",
  "I will box you 🥊",
  "I will bite you 🦷",
  "Keep trying 😂",
  "Be serious pls 😭",
  "Wrong choice ❌",
  "Are you sure? 👀",
  "Think again 😌",
  "You know the answer 😏",
  "Why are you like this 😭",
  "Focus pls 😤",
  "Don’t stress me 😭"
];

let lastTextIndex = -1;

noBtn.addEventListener("mouseover", () => {
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // Move button
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Change text (avoid immediate repeats)
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * nopeTexts.length);
  } while (newIndex === lastTextIndex);

  lastTextIndex = newIndex;
  noBtn.textContent = nopeTexts[newIndex];
});


//Yes button
yesBtn.addEventListener("click", () => {
  message.textContent =
    "YAYYY 😍 I love you baby and can’t wait to spend the day with you ❤️";

  secretBtn.classList.remove("hidden");
  memories.classList.remove("hidden");

  launchFireworks();
  spawnHearts();

  setTimeout(() => {
    message.textContent = "";
  }, 5000);
});

//secret message
secretBtn.addEventListener("click", () => {
  secretMessage.classList.toggle("hidden");
});

//floating hearts
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

//foreworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworksTimeout;

function launchFireworks() {
  if (fireworksTimeout) clearTimeout(fireworksTimeout);

  for (let i = 0; i < 120; i++) {
    setTimeout(() => {
      ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.6,
        Math.random() * 3 + 1,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }, i * 12);
  }

  fireworksTimeout = setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 5000);
}

// animations
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
