let slideLength;

window.addEventListener('modalOpen', function () {
   const carousel = document.querySelector('.carousel');
   const slide = document.querySelector('.track');
   const images = document.getElementsByClassName('track__img')
   const next = document.querySelector('#next')
   const prev = document.querySelector('#prev')
   let action;

   if (images.length == 1) {
      next.style.display = 'none'
      prev.style.display = 'none'
      slide.style.transform = 'translateX(0px)'
      return
   } else {
      next.style.display = 'block'
      prev.style.display = 'block'
   }

   window.onresize = function () {
      slideLength = slide.clientWidth
      slide.style.transform = `translateX(-${slideLength}px)`
      carousel.style.height = String(Math.floor(slideLength / 1.78)) + 'px'
   }
   slideLength = slide.clientWidth
   slide.style.transform = `translateX(-${slideLength}px)`
   carousel.style.height = String(Math.floor(slideLength / 1.78)) + 'px'

   Element.prototype.appendAfter = function (element) {
      element.parentNode.insertBefore(this, element.nextSibling);
   }, false;

   Element.prototype.appendBefore = function (element) {
      element.parentNode.insertBefore(this, element);
   }, false;

   next.addEventListener('click', e => {
      if (slide.classList.contains('transition')) return
      slide.classList.add('transition')
      slide.style.transform = `translateX(-${slideLength * 2}px)`
      action = 'next'
   })

   prev.addEventListener('click', e => {
      if (slide.classList.contains('transition')) return
      slide.classList.add('transition')
      slide.style.transform = 'translateX(0px)'
      action = 'prev'
   })

   slide.addEventListener('transitionend', function (e) {
      this.classList.remove('transition')
      if (action == 'next') {
         slide.firstElementChild.appendAfter(images[images.length - 1])
      }
      if (action == 'prev') {
         slide.lastElementChild.appendBefore(images[0])
      }
      slide.style.transform = `translateX(-${slideLength}px)`
   })
})