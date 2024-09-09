document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.property-cards');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    let scrollPosition = 0;

    leftBtn.addEventListener('click', () => {
        scrollPosition += 300; // Adjust this value as needed
        if (scrollPosition > 0) scrollPosition = 0;
        carousel.style.transform = `translateX(${scrollPosition}px)`;
    });

    rightBtn.addEventListener('click', () => {
        scrollPosition -= 300; // Adjust this value as needed
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (scrollPosition < -maxScroll) scrollPosition = -maxScroll;
        carousel.style.transform = `translateX(${scrollPosition}px)`;
    });
})
leftBtn.addEventListener('click', () => {
    scrollPosition += 300; // Adjust this value as needed
    if (scrollPosition > 0) scrollPosition = 0; // This line prevents over-scrolling to the left
    carousel.style.transform = `translateX(${scrollPosition}px)`;
});;
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.property-cards');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    let scrollPosition = 0;

    leftBtn.addEventListener('click', () => {
        scrollPosition += 300; // Adjust this value as needed
        if (scrollPosition > 0) scrollPosition = 0; // Prevent over-scrolling to the left
        carousel.style.transform = `translateX(${scrollPosition}px)`;
    });

    rightBtn.addEventListener('click', () => {
        scrollPosition -= 300; // Adjust this value as needed
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (scrollPosition < -maxScroll) scrollPosition = -maxScroll; // Prevent over-scrolling to the right
        carousel.style.transform = `translateX(${scrollPosition}px)`;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.property-carousel');

    carousels.forEach(carousel => {
        const leftBtn = carousel.querySelector('.scroll-btn.left');
        const rightBtn = carousel.querySelector('.scroll-btn.right');
        const propertyCards = carousel.querySelector('.property-cards');
        const cardWidth = propertyCaConsole.log("");
        rds.querySelector('.property-card').offsetWidth;
        let scrollPosition = 0;

        leftBtn.addEventListener('click', () => {
            scrollPosition += cardWidth;
            if (scrollPosition > 0) scrollPosition = 0;
            propertyCards.style.transform = `translateX(${scrollPosition}px)`;
        });

        rightBtn.addEventListener('click', () => {
            scrollPosition -= cardWidth;
            const maxScroll = propertyCards.scrollWidth - carousel.clientWidth;
            if (scrollPosition < -maxScroll) scrollPosition = -maxScroll;
            propertyCards.style.transform = `translateX(${scrollPosition}px)`;
        });
    });
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}

function toggleReadMore(dotsId, moreId, element) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        if (element.tagName === "A") {
            element.innerHTML = "Lire la suite";
        } else if (element.tagName === "BUTTON") {
            element.innerHTML = "Lire plus";
        }
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        if (element.tagName === "A") {
            element.innerHTML = "Lire moins";
        } else if (element.tagName === "BUTTON") {
            element.innerHTML = "Lire moins";
        }
        moreText.style.display = "inline";
    }
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Lire plus";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Lire moins";
        moreText.style.display = "inline";
    }
}

function scrollLeft() {
    document.getElementById('carousel').scrollBy({
        left: -300, // Adjust this value as needed
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('carousel').scrollBy({
        left: 300, // Adjust this value as needed
        behavior: 'smooth'
    });
}

function scrollLeft(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        left: -300, // Adjust this value as needed
        behavior: 'smooth'
    });
}

function scrollRight(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        left: 300, // Adjust this value as needed
        behavior: 'smooth'
    });
}

function scrollLeft(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        left: -carousel.clientWidth / 2, // Adjust scroll distance
        behavior: 'smooth'
    });
}

function scrollRight(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        left: carousel.clientWidth / 2, // Adjust scroll distance
        behavior: 'smooth'
    });
}

function scrollLeft(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.querySelector('.property-cards').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.querySelector('.property-cards').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}