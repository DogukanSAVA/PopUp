const play = document.querySelector(".play");

const popup = document.querySelector("#popup");

const popup_close = document.querySelector(".popup-close")

play.addEventListener("click", () => {

          popup.classList.add("popup-open");

});

popup_close.addEventListener("click", () => {

          popup.classList.remove("popup-open");

});