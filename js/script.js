const openNav = document.querySelector('.nav i')
const navLinks = document.querySelector('.nav__links')
openNav.addEventListener('click', e => {
   navLinks.classList.toggle('show')
})

mixitup(document.querySelector('.projects__grid'));