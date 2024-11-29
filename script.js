// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert("Please fill in all fields.");
        }
    });
});
