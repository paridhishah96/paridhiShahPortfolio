// this module fades in various sections upon scroll 

export const faders = document.querySelectorAll(".fadeIn");


const appearOptions = {
    threshold: 0.75,
    rootMargin: "0px"
};
export const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach (entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);
