
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id + ']').classList.add('active')
      });
    };
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


};

  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
        
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .skill-container, .portfolio-box, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});



const titles = ["Data Analyst", "Data scientist"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.querySelector(".multiple-text");

function typeEffect() {
    const currentTitle = titles[currentIndex];
    const displayedText = currentTitle.substring(0, charIndex);

    textElement.textContent = displayedText;

    if (!isDeleting && charIndex < currentTitle.length) {
        charIndex++;
        setTimeout(typeEffect, 80); 
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 80); 
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            currentIndex = (currentIndex + 1) % titles.length;
        }
        setTimeout(typeEffect, 1000); 
    }
}

typeEffect();