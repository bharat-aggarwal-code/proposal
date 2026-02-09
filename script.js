const greetingScreen = document.querySelector(".greeting-screen");
const envelop = document.querySelector(".envelop");
const frame = document.querySelector(".frame");
const screen = document.querySelector(".screen");
const minimize = document.querySelector(".minimize");
const close = document.querySelector(".close");
const question = document.querySelector(".question");
const confirmMessage = document.querySelector(".confirm-message");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

envelop.addEventListener("click", function () {
	greetingScreen.classList.add("hidden");
	frame.classList.remove("hidden");

});

close.addEventListener("click", function () {
	frame.classList.add("hidden");
	greetingScreen.classList.remove("hidden");
});

minimize.addEventListener("click", function () {
	frame.classList.add("hidden");
	greetingScreen.classList.remove("hidden");
});

yesBtn.addEventListener("click", function () {
	question.classList.add("hidden");
	confirmMessage.classList.remove("hidden");
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
});
