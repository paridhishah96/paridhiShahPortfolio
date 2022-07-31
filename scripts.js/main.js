import { form, handleSubmit } from "./formModule.js";
import { faders, appearOnScroll } from "./fadeModule.js";

const init = function () {
    // function to fade in certain elements upon scroll
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // event listener that calls the function to show either success or error
    form.addEventListener("submit", handleSubmit);
}

init();