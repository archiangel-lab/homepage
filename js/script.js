{
    const welcome = () => {
        console.log("Witaj na mojej stronie! Proszę się rozgościć 😃 Może kawy? ☕");
    }

    const toggleBacground = () => {
        const body = document.documentElement;
        // const myNameIs = document.querySelector(".js-nextColorName")
        const nextColorName = document.querySelector(".js-nextColorName")

        body.classList.toggle("dark");
        // myNameIs.classList.toggle("dark");
        nextColorName.innerText = body.classList.contains("dark") ? "JASNY" : "CIEMNY";
    };


    const init = () => {
        const changeBacgroundButton = document.querySelector(".js-changeBacgroundButton");
        // const myNameIs = document.querySelector(".myNameIs" toggleBacground);
        changeBacgroundButton.addEventListener("click", toggleBacground);

        welcome();
    };
        init();
    }
