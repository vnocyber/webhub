/*
==========================================
Learn Cyber With Vano
Main JavaScript
Version : 1.0
==========================================
*/

// ==========================
// Scroll Progress
// ==========================

window.addEventListener("scroll", () => {

    const progress = document.querySelector(".progress-bar");

    if (!progress) return;

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.scrollY / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

// ==========================
// Back To Top
// ==========================

const backToTop =
    document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 300) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if(backToTop){

    backToTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

// ==========================
// Active Navbar
// ==========================

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    if(link.href===window.location.href){

        link.classList.add("active");

    }

});

// ==========================
// Fade Animation
// ==========================

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-in");

        }

    });

});

document.querySelectorAll(

"section,.article-card,.contact-card,.faq-item"

).forEach(item=>{

    observer.observe(item);

});

// ==========================
// Dark Mode (Preparation)
// ==========================

const themeButton =
document.querySelector(".theme-toggle");

if(themeButton){

    themeButton.addEventListener("click",()=>{

        document.body.classList.toggle("light");

    });

}

// ==========================
// Console
// ==========================

console.log(

"Learn Cyber With Vano Loaded."

);
