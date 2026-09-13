// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// =========================
// CONTACT FORM VALIDATION
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    name.classList.remove("invalid");
    email.classList.remove("invalid");
    message.classList.remove("invalid");

    let isValid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        name.classList.add("invalid");
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        email.classList.add("invalid");
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("invalid");
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        message.classList.add("invalid");
        isValid = false;
    } else if (message.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        message.classList.add("invalid");
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Opens the visitor's default email application after validation.
    const subject = encodeURIComponent(`Portfolio message from ${name.value.trim()}`);
    const body = encodeURIComponent(
        `Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\nMessage:\n${message.value.trim()}`
    );

    successMessage.textContent = "Validation successful. Opening your email app...";

    window.location.href =
        `mailto:ankitaswain783@gmail.com?subject=${subject}&body=${body}`;

    contactForm.reset();
});


// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
