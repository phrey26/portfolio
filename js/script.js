document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    // Ensure navbar is positioned statically at the top
    navbar.style.position = "fixed";
    navbar.style.width = "100%";
    navbar.style.top = "0";
    navbar.style.transition = "top 0.4s ease-in-out";

    window.addEventListener("scroll", () => {
        if (window.scrollY < 50 || window.scrollY < lastScrollY) {
            // Show navbar when at the top or scrolling up
            navbar.style.top = "0";
        } else {
            // Hide navbar when scrolling down
            navbar.style.top = "-80px"; // Adjust based on navbar height
        }
        lastScrollY = window.scrollY;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all relevant containers
    const containers = document.querySelectorAll(".about-container, .project-container, .my-work-container");

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
