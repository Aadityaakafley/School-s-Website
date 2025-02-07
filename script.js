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