import "./style.scss";
const checkBox = document.querySelector(".nav__checkbox");
const body = document.querySelector("body");
const logo = document.querySelector(".logo");

checkBox.addEventListener("click", () => {
  console.log(`clicked `);
  body.classList.toggle("scroll-hidden");
  logo.classList.toggle("hidden");
});
