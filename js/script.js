console.log("Witaj na mojej stronie! Proszę się rozgościć 😃 Może kawy? ☕");



let changeBacgroundButton = document.querySelector(".js-changeBacgroundButton");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".js-nextColorName");
let welcome = document.querySelector(".welcome");


changeBacgroundButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    welcome.classList.toggle("dark");
    nextColorName.innerText = body.classList.contains("dark") ? "JASNY" : "CIEMNY";


});


