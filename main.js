import "./style.scss";
const checkBox = document.querySelector(".nav__checkbox");
const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const main = document.querySelector("main");
checkBox.addEventListener("click", () => {
  body.classList.toggle("scroll-hidden");
  logo.classList.toggle("hidden");
  main.classList.toggle("hidden");
});
