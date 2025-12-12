const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Sticky header & scroll spy
window.onscroll = () => {
    const posisiScroll = window.scrollY;

    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const tinggi = section.offsetHeight;
        const id = section.getAttribute('id');

        if(posisiScroll >= offset && posisiScroll < offset + tinggi){
            navLinks.forEach(link => link.classList.remove('active'));
            const linkAktif = document.querySelector(`header nav a[href*='${id}']`);
            if(linkAktif) linkAktif.classList.add('active');
        }
    });

    const header = document.querySelector('header');
    header.classList.toggle('sticky', posisiScroll > 100);
}

// Toggle menu mobile
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
});
