{
    const welcome = () => {
        console.log("Witaj na mojej stronie! Proszę się rozgościć 😃 Może kawy? ☕");
    }

    const toggleBacground = () => {
        const body = document.documentElement;
        const nextColorName = document.querySelector(".js-nextColorName")

        body.classList.toggle("dark");
        nextColorName.innerText = body.classList.contains("dark") ? "JASNY" : "CIEMNY";
    };


    const init = () => {
        const changeBacgroundButton = document.querySelector(".js-changeBacgroundButton");
        changeBacgroundButton.addEventListener("click", toggleBacground);

        welcome();
    };
    init();
}
