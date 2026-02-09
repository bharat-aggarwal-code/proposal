const greetingScreen = document.querySelector(".greeting-screen");
const envelop = document.querySelector(".envelop");
const frame = document.querySelector(".frame");
const minimize = document.querySelector(".minimize");
const close = document.querySelector(".close");
const question = document.querySelector(".question");
const confirmMessage = document.querySelector(".confirm-message");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const noHint = document.querySelector(".no-hint");
let heartTimers = [];

function openFrame() {
	greetingScreen.classList.add("hidden");
	frame.classList.remove("hidden");
};

function closeFrame() {
  frame.classList.add("hidden");
  greetingScreen.classList.remove("hidden");

  // reset screens
  question.classList.remove("hidden");
  confirmMessage.classList.add("hidden");

  // reset NO button
  noBtn.classList.remove("run", "no-exit");
  noBtn.style.left = "";
  noBtn.style.top = "";

  // reset hint
  noHint.textContent = "Go on… try saying no 😏";
  noHint.classList.remove("angry");

  // reset yes sumbmission
  stopHeartRain();
}

function minimizeFrame() {
	frame.classList.add("hidden");
	greetingScreen.classList.remove("hidden");
};

envelop.addEventListener("click", openFrame);
close.addEventListener("click", closeFrame);
minimize.addEventListener("click", minimizeFrame);

function startHeartRain() {
  heartTimers = [];

  for (let i = 0; i < 120; i++) {
    const timer = setTimeout(createHeart, i * 150);
    heartTimers.push(timer);
  }
}

function stopHeartRain() {
  heartTimers.forEach(t => clearTimeout(t));
  heartTimers = [];

  document.querySelectorAll(".heart").forEach(h => h.remove());
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💘";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

yesBtn.addEventListener("click", function () {
	question.classList.add("hidden");
	confirmMessage.classList.remove("hidden");

	startHeartRain();
});

noBtn.addEventListener("pointerenter", () => {
  const frameRect = frame.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = frameRect.width - noBtnRect.width;
  const maxY = frameRect.height - noBtnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.classList.add("run");

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  const speed = window.innerWidth < 768 ? 0.15 : 0.25;
  noBtn.style.transition = `left ${speed}s ease, top ${speed}s ease`;

});

noBtn.addEventListener("click", () => {
  noBtn.classList.add("no-angry", "no-exit");
  noHint.textContent = "😈 No is not an option!";
  noHint.classList.add("angry");

  // move it outside the frame
  noBtn.style.left = "-250px";
  noBtn.style.top = "-250px";
});