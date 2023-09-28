const revealSection = (index) => {
    const sections = document.querySelectorAll(".section");
    sections[index].classList.add("visible");
};

let currentIndex = 0;

const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sections = document.querySelectorAll(".section");

    if (scrollPosition >= sections[currentIndex].offsetTop - windowHeight / 2) {
        revealSection(currentIndex);
        currentIndex++;
    }
};

window.addEventListener("scroll", handleScroll);

const revealAllSections = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.classList.add("visible");
    });
};

window.addEventListener("load", revealAllSections);

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
        });
    }
};

const navLinks = document.querySelectorAll(".header-nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSectionId = link.getAttribute("href").slice(1);
        scrollToSection(targetSectionId);
    });
});

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

const userTheme = localStorage.getItem("theme");
if (userTheme === "dark") {
    document.body.classList.add("dark-theme");
}

const scrollUpButton = document.getElementById("scroll-up-btn");

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

scrollUpButton.addEventListener("click", scrollToTop);

const toggleScrollUpButton = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
};

window.addEventListener("scroll", toggleScrollUpButton);

const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').slice(1);

        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
