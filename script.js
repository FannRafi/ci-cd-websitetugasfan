// Typing effect
const text = ["Web Developer", "UI Designer", "Freelancer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = text[i];
    document.querySelector(".typing").textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) j++;
    else if (isDeleting && j > 0) j--;
    else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.onclick = () => {
    nav.classList.toggle("active");
};