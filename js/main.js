document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerIcon = document.querySelector(".hamburger i");
    const navDropdown = document.querySelector(".nav-dropdown");
    const sections = document.querySelectorAll(".section-content");
    const navLinks = document.querySelectorAll(".nav-link");
    const brandLink = document.querySelector(".brand-name");

    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove("active");
            section.classList.add("fade-out");

            setTimeout(() => {
                section.style.display = "none";
                section.classList.remove("fade-out");
            }, 400);
        });
    }

    function showSection(id) {
        hideAllSections();
        const activeSection = document.querySelector(id);
        if (activeSection) {
            setTimeout(() => {
                activeSection.style.display = "block";
                setTimeout(() => {
                    activeSection.classList.add("active");
                }, 10);
            }, 400);
        }
    }

    hideAllSections();
    showSection("#home");

    if (brandLink) {
        brandLink.addEventListener("click", function (event) {
            event.preventDefault();
            showSection("#home");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                showSection(targetId);
            }
        });
    });

    hamburger.onclick = function () {
        navDropdown.classList.toggle("open");
        hamburgerIcon.classList.toggle("fa-xmark");
        hamburgerIcon.classList.toggle("fa-bars-staggered");
    };

    document.addEventListener("click", event => {
        if (
            !navDropdown.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {
            navDropdown.classList.remove("open");
            hamburgerIcon.classList.add("fa-bars-staggered");
            hamburgerIcon.classList.remove("fa-xmark");
        }
    });

    document.querySelectorAll(".nav-dropdown li a").forEach(link => {
        link.addEventListener("click", () => {
            navDropdown.classList.remove("open");
            hamburgerIcon.classList.add("fa-bars-staggered");
            hamburgerIcon.classList.remove("fa-xmark");
        });
    });
});

