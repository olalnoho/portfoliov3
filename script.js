const headings = document.querySelectorAll('.about__header')
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
         } else {
            el.classList.add('animateLeft')
         }
         // @note 
         // So the animation only plays once.
         self.unobserve(el)
      }
   })
}, {
   // @note
   // So the entire element has to be in view for trigger.
   threshold: 1,
});

[...headings, ...skills].forEach(el => {
   observer.observe(el)
})