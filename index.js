const hero = document.querySelector('.hero');
const logo = document.querySelector('#logo');
const navLinks = document.querySelector('.nav__links');
const headline = document.querySelector('.headline');
const t1 = new TimelineMax();
t1.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
    .fromTo(logo, 0.5, { opacity: "0", x: "30" }, { opacity: "1", x: "0" }, "-=0.5")
    .fromTo(navLinks, 0.5, { opacity: "0", x: "30" }, { opacity: "1", x: "0" }, "-=0.5")
    .fromTo(headline, 0.5, { opacity: "0", x: "30" }, { opacity: "1", x: "0" }, "-=0.5");


const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

document.querySelectorAll('.nav__link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

