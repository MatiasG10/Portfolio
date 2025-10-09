
// Controlador de tabs en skills

const skillsTabs = document.querySelectorAll(".skills-tab-button");
const skillsContents = document.querySelectorAll(".skills-tab-content");

skillsTabs.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.dataset.tab;

        skillsTabs.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        skillsContents.forEach(content => {
            content.classList.toggle("active", content.id === `skills-tab-${target}`);
        });
    });
});