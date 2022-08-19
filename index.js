const body = document.querySelector(".flip");
const Fcard = document.querySelector("#front");
const Bcard = document.querySelector("#back");
const button = document.querySelector(".pressMe");

const togglebutton = function () {
  Bcard.classList.toggle("back-touched");
  Fcard.classList.toggle("front-touched");
  Bcard.classList.toggle("back1");
  Fcard.classList.toggle("front1");
  // setTimeout(() => { window.open("https://luckydouble.creatorlink.net/", "_blank");
  // }, 800);
};

button.addEventListener("click", togglebutton);
// Bcard.addEventListener('click', togglebutton)
