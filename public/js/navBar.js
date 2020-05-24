const breakpoint = document.querySelector('.about__header')
const nav = document.querySelector('.nav')

const observer = new IntersectionObserver((entries, self) => {
   entries.forEach(entry => {
      if (entry.target == breakpoint) {
         if(entry.boundingClientRect.top < 0){
            nav.classList.add('sticky')
         } else {
            nav.classList.remove('sticky')
         }
      }
   })
}, {
   threshold: 1
})

observer.observe(breakpoint)
observer.observe(nav)