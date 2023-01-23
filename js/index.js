const buttonHamburger = document.querySelector('.nav-hamburger');

buttonHamburger.addEventListener('click', ()=>{
    const navList = document.querySelector('.nav__list');
    navList.classList.toggle('nav-list-view');
});
AOS.init();