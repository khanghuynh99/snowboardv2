const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const originalNoBtnPosition = {
    left: noBtn.style.left,
    top: noBtn.style.top
  };

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay!!! see you on the 16th!";
  gif.src =
    "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif";

   noBtn.style.left = originalNoBtnPosition.left;
   noBtn.style.top = originalNoBtnPosition.top;

});

noBtn.addEventListener("click", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  question.innerHTML = "missed the button nerd"

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  gif.src = "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif";
});