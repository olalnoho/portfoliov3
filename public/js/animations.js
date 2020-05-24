const headings = document.querySelectorAll('.about__header, .projects__header')
const gallery = document.querySelectorAll('.projects__grid')
const filterbtns = document.querySelectorAll('.filterbtn')
const skills = document.querySelectorAll('.skill')

const observer = new IntersectionObserver((entries, self) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         const el = entry.target
         if (el.classList.contains('skill')) {
            if (el.dataset.n % 2 == 0) {
               el.classList.add('animateRight')
            } else {
               el.classList.add('animateLeft')
            }
         } else if (el.classList.contains('filterbtn')) {
            el.style.animation = `fadeIn 1.5s ${el.dataset.delay}s ease forwards`
         } else if (el.classList.contains('projects__grid')) {
            el.classList.add('animateUp')
         } else {
            el.classList.add('animateLeft')
         }
         // @note 
         // So the animation only plays once.
         self.unobserve(el)
      }
   })
}, {
   threshold: 0.2,
});

[...headings, ...skills, ...filterbtns, ...gallery].forEach(el => {
   observer.observe(el)
})