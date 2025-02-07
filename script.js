window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('header');

   
    const headerHeight = header.offsetHeight;

   
    if (window.scrollY > headerHeight) {
        nav.classList.add('solid');
    } else {
        nav.classList.remove('solid');
    }
});