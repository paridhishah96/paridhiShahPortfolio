import { form, handleSubmit } from "./formModule.js";
import { faders, appearOnScroll } from "./fadeModule.js";
import hamburgerMenu from "./hamburgerMenuModule.js";
import populateSkills from "./displayDataModule.js";
import skillsList from "./skillsDataModule.js";
import { scalers, scaleOnScroll } from "./scaleModule.js";



// init to initialize specific function upon page load
function init() {
    // opens and closes nav using to click event
    hamburgerMenu();

    // populate skills section with icons and their names using the skill list module
    populateSkills(skillsList);


    // function to fade in certain elements upon scroll
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // function to scale up the skill list upon scroll
    scalers.forEach(scaler => {
        scaleOnScroll.observe(scaler);
    });

    // event listener that shows either success or error upon form submission
    form.addEventListener("submit", handleSubmit);
}

init();