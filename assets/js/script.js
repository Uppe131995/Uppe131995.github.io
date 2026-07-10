/* =====================================
   PAGE LOAD
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

});

/* =====================================
   TYPING EFFECT
===================================== */

const roles = [
    "Senior Data Analyst",
    "Power BI Developer",
    "Microsoft Fabric Engineer",
    "Python Developer",
    "Data Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let typingTimer;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    const current = roles[roleIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

    } else {

        typing.textContent = current.substring(0, charIndex--);

    }

    let speed = 90;

    if (!deleting && charIndex === current.length + 1) {

        deleting = true;
        speed = 1500;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;

    }

    clearTimeout(typingTimer);

    typingTimer = setTimeout(typeEffect, speed);

}

typeEffect();

/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    navbar.classList.toggle("scrolled", window.scrollY > 60);

});

/* =====================================
   ACTIVE MENU
===================================== */

const sections = document.querySelectorAll("header, section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =====================================
   SECTION REVEAL
===================================== */

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
});

document.querySelectorAll("section").forEach(section => {

    revealObserver.observe(section);

});

/* =====================================
   SKILL BAR ANIMATION
===================================== */

const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-bar");

if (skillSection) {

    const observer = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            progressBars.forEach(bar => {

                bar.classList.add("animate");

            });

        }

    }, {

        threshold: .4

    });

    observer.observe(skillSection);

}

/* =====================================
   COUNTER ANIMATION
===================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let count = 0;

        const updateCounter = () => {

            const increment = Math.max(1, Math.ceil(target / 80));

            count += increment;

            if (count < target) {

                counter.innerText = count;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: .6

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* =====================================
   SCROLL TO TOP
===================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    topBtn.style.display = window.scrollY > 300 ? "flex" : "none";

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* =====================================
   LOADER
===================================== */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }, 1000);

});

/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 80,

            behavior: "smooth"

        });

    });

});

/* =====================================
   IMAGE HOVER EFFECT
===================================== */

const profileImage = document.querySelector(".hero-image img");

if (profileImage) {

    profileImage.addEventListener("mousemove", e => {

        const rect = profileImage.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((rect.height / 2 - y) / rect.height) * 12;

        profileImage.style.transform =
            `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform =
            "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

}

/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log("%cWelcome 👋", "color:#38bdf8;font-size:20px;font-weight:bold;");
console.log("Portfolio developed by Uppe Suresh");



/* =====================================
   LIVE DATE & TIME
===================================== */

function updateDateTime() {

    const date = document.getElementById("currentDate");
    const time = document.getElementById("currentTime");

    if (!date || !time) return;

    const now = new Date();

    date.textContent = now.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    time.textContent = now.toLocaleTimeString("en-IN");

}

updateDateTime();

setInterval(updateDateTime, 1000);

/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("navLinks");

if(menuToggle && mobileMenu){

    menuToggle.addEventListener("click",()=>{

        mobileMenu.classList.toggle("active");

        menuToggle.innerHTML = mobileMenu.classList.contains("active")

            ? '<i class="fa-solid fa-xmark"></i>'

            : '<i class="fa-solid fa-bars"></i>';

    });

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            mobileMenu.classList.remove("active");

            menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>';

        });

    });

}