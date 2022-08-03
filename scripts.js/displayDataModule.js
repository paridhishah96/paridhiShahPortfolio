// a for each loop that populate skills list so that it's easier to add more in the future 
const skillsUl = document.querySelector("#skillsUl")

const populateSkills = function (skillsData) {
    skillsData.forEach( skill => {
        const listEl = document.createElement("li")
        listEl.innerHTML = ` ${skill.icon} <p>${skill.description}</p>`
        skillsUl.appendChild(listEl);
    });
}

export default populateSkills;