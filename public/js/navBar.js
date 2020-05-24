const navbarLinks = document.querySelectorAll('.nav__links ul li')
const homeBreakpoint = document.querySelector('.landing__container')
const aboutBreakpoint = document.querySelector('.about .container')
const projectsBreakpoint = document.querySelector('.projects .container')

console.log(homeBreakpoint)

const changeActiveNav = which => {
   navbarLinks.forEach(
      link => link.textContent === which ? link.classList.add('active') : link.classList.remove('active')
   )
}

const observer = new IntersectionObserver((entries, self) => {
   entries.forEach(e => {
      if (e.isIntersecting) {
         let which;
         if (e.target == homeBreakpoint) {
            which = 'Home'
         } else if (e.target == aboutBreakpoint) {
            which = 'About'
         } else if (e.target == projectsBreakpoint) {
            which = 'Projects'
         }
         console.log(which)
         changeActiveNav(which)
      }
   })
}, {
   threshold: 0.51
});

[homeBreakpoint, aboutBreakpoint, projectsBreakpoint].forEach(
   bp => observer.observe(bp)
)