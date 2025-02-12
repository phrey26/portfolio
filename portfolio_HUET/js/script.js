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
