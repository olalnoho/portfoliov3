const projectbtns = document.querySelectorAll('.project__btn')
const backdrop = document.querySelector('.backdrop')
const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')

projectbtns.forEach(btn => {
   btn.addEventListener('click', e => {
      modalContainer.classList.add('visible')
   })
})

backdrop.addEventListener('click', e => {
   console.log('ran')
   modalContainer.classList.remove('visible')
})