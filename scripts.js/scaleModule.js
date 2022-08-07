export const scalers = document.querySelectorAll("#skillList");


const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px"
};
export const scaleOnScroll = new IntersectionObserver(function (entries, scaleOnScroll) {
    entries.forEach (entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("scaleIn");
            scaleOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);
