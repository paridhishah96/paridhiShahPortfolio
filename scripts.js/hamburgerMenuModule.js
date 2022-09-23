const navEl = document.querySelector("#slideOutNav");
const hamIcon = document.querySelector(".navIcon");


const hamburgerMenu = () => {
    hamIcon.addEventListener("click", () => {
        navEl.classList.toggle("showNav")
    })
    
    navEl.addEventListener("click", (e) => {
        if (e.target.id === "slideOutNav"){
            return
        } else {
            navEl.classList.toggle("showNav")
        }
    })
}


export default hamburgerMenu;