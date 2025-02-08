document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header'); 

    window.addEventListener('scroll', () => {
        const headerHeight = header.offsetHeight;

        if (window.scrollY > headerHeight) {
            nav.classList.add('solid');
        } else {
            nav.classList.remove('solid'); 
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a'); 
    const mapSection = document.querySelector('.location'); 

    window.addEventListener('scroll', () => {
        if (mapSection) {
            const mapTop = mapSection.offsetTop;
            const scrollPos = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollPos + windowHeight > mapTop + 100) { 
                navLinks.forEach(link => link.classList.add('scrolled-text')); 
            } else {
                navLinks.forEach(link => link.classList.remove('scrolled-text')); 
            }
        }
    });
});