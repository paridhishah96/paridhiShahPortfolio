import { form, handleSubmit } from "./formModule.js";
import { faders, appearOnScroll } from "./fadeModule.js";




const navEl = document.querySelector("#slideOutNav");
const hamIcon = document.querySelector(".navIcon");


hamIcon.addEventListener("click", () => {
    navEl.classList.toggle("showNav")
})

navEl.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.id === "slideOutNav"){
        return
    } else {
        navEl.classList.toggle("showNav")
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