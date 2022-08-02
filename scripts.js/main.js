import { form, handleSubmit } from "./formModule.js";
import { faders, appearOnScroll } from "./fadeModule.js";




const navEl = document.querySelector("#slideOutNav");
const hamIcon = document.querySelector(".navIcon");
const closeIcon = document.querySelector("#closeButton")


hamIcon.addEventListener("click", () => {
    if (navEl.classList.contains("hideNav") ) {
        navEl.classList.replace("hideNav", "showNav")
    } else {
        return
    }
})

closeIcon.addEventListener("click", () => {
    if (navEl.classList.contains("showNav") ) {
        navEl.classList.replace("showNav", "hideNav")
    } else {
        return
    }
})
























// init to initialize specific function upon page load
const init = function () {
    // function to fade in certain elements upon scroll
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // event listener that calls the function to show either success or error
    form.addEventListener("submit", handleSubmit);
}

init();