import "./style.scss";
import sal from "sal.js";
sal({ threshold: 0.5, once: false });
const body = document.querySelector("body");
const main = document.querySelector("main");
const checkBox = document.querySelector(".nav__checkbox");
const lines = document.querySelector(".nav__hamburger-lines");
checkBox.addEventListener("click", () => {
  body.classList.toggle("scroll-hidden");
  main.classList.toggle("hidden");
});
