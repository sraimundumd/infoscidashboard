//This will be for the mobile menu 
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#mylist');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});