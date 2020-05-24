const navbtns = document.querySelectorAll('.navbtn')
const scroll = new SmoothScroll();

navbtns.forEach(btn => {
   btn.addEventListener('click', e => {
      var anchor = document.querySelector('#' + btn.dataset.nav);
      if(anchor) {
         scroll.animateScroll(anchor);
      }
   })
})