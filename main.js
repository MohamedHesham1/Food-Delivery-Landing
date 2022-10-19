import "./style.scss";
const body = document.querySelector("body");
const main = document.querySelector("main");
const checkBox = document.querySelector(".nav__checkbox");
const lines = document.querySelector(".nav__hamburger-lines");
checkBox.addEventListener("click", () => {
  body.classList.toggle("scroll-hidden");
  main.classList.toggle("hidden");
});
