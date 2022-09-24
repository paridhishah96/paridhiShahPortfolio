import { form, handleSubmit } from "./formModule.js";
import hamburgerMenu from "./hamburgerMenuModule.js";
import populateSkills from "./displayDataModule.js";
import skillsList from "./skillsDataModule.js";

// init to initialize specific function upon page load
function init() {
    // opens and closes nav using to click event
    hamburgerMenu();

    // populate skills section with icons and their names using the skill list module
    populateSkills(skillsList);

    // event listener that shows either success or error upon form submission
    form.addEventListener("submit", handleSubmit);

    // some fun console.logs as easter eggs!
    console.log("Hello hello hello");
    console.log("I see you've made your way to the console!");
    console.log("Don't worry, I made sure to clear it 😉");
    console.log("Do contact me if you would like to discuss anything from my Portfolio!");

}

// initializing app on page load
init();

// initializing the AOS library on page load
AOS.init({
    duration: 700,
})
