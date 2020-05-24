window.addEventListener('DOMContentLoaded', (event) => {
   (function () {
      const slide = document.querySelector('.track');
      const images = document.getElementsByClassName('track__img')
      const next = document.querySelector('#next')
      const prev = document.querySelector('#prev')
      let action;

      if (images.length == 1) {
         next.remove()
         prev.remove()
         return
      }

      window.onresize = function () {
         slideLength = images[0].clientWidth
         slide.style.transform = `translateX(-${slideLength}px)`
      }

      let slideLength = slide.clientWidth
      slide.style.transform = `translateX(-${slideLength}px)`

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
   })()
});