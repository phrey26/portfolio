document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    // Initially hide the navbar
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "transform 0.5s ease-in-out";

    // Show navbar when hovering near the top of the page
    document.addEventListener("mousemove", (event) => {
        if (event.clientY < 50) {
            navbar.style.transform = "translateY(0)";
        } else {
            navbar.style.transform = "translateY(-100%)";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all containers inside the About page and Projects section
    const containers = document.querySelectorAll(".about-container, .project-container");

    // Add pop-out effect to each container
    containers.forEach((container, index) => {
        setTimeout(() => {
            container.classList.add("pop-out");
        }, index * 200); // Adds a small delay for a staggered effect
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check localStorage for theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        }
    });
});

