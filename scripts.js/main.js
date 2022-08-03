import { form, handleSubmit } from "./formModule.js";
import { faders, appearOnScroll } from "./fadeModule.js";
import hamburgerMenu from "./hamburgerMenuModule.js";
import populateSkills from "./displayDataModule.js";
// import skillsList from "./skillsDataModule";


const skillsList = [
    {
        icon: `<span class="devicons devicons-html5"></span>`,
        description: "HTML5"
    },
    {
        icon: `<span class="devicons devicons-css3"></span>` ,
        description: "CSS"
    },
    {
        icon: `<span class="devicons devicons-sass"></span>` ,
        description: "SASS & SCSS"
    },
    {
        icon: `<span class="devicons devicons-javascript_badge"></span>` ,
        description: "JavaScript (ES6)"
    },
    {
        icon: `<span class="devicons devicons-jquery"></span>` ,
        description: "jQuery"
    },
    {
        icon: `<span class="devicons devicons-firebase"></span>` ,
        description: "Firebase"
    },
    {
        icon: `<i class="devicon-react-original colored"></i>` ,
        description: "React"
    },
    {
        icon: `<span class="devicons devicons-git"></span>` ,
        description: "Git"
    },
    {
        icon: `<span class="devicons devicons-github_badge"></span>` ,
        description: "GitHub"
    },
    {
        icon: `<i class="devicon-vscode-plain colored"></i>` ,
        description: "VS Code Editor"
    },
    {
        icon: `<span class="devicons devicons-responsive"></span>` ,
        description: "Responsive"
    },
    {
        icon: `<span class="material-symbols-outlined" aria-hidden="true">group</span>` ,
        description: "Paired Programming"
    },
    {
        icon: `<span class="material-symbols-outlined" aria-hidden="true">settings_ethernet</span>`,
        description: "REST APIs"
    },
    {
        icon: `<i class="devicon-python-plain colored"></i>` ,
        description: "Python"
    },
    {
        icon: `<span class="devicons devicons-terminal"></span>` ,
        description: "Terminal"
    }
];

// init to initialize specific function upon page load
function init() {
    // opens and closes nav using to click event
    hamburgerMenu();

    // populate skills section
    populateSkills(skillsList);


    // function to fade in certain elements upon scroll
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // event listener that shows either success or error upon form submission
    form.addEventListener("submit", handleSubmit);
}

init();