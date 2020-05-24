const projectbtns = document.querySelectorAll('.project__btn')
const backdrop = document.querySelector('.backdrop')
const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')
const closebtn = document.querySelector('.modal__close')

const title = document.querySelector('.info__title')
const description = document.querySelector('.info__desc')
const links = document.querySelectorAll('.info__actions .btn')

projectbtns.forEach((btn, i) => {
   btn.addEventListener('click', function (e) {
      modalContainer.classList.add('visible')
      populateModal(this.dataset.proj)
   })
});

[backdrop, closebtn].forEach(el => el.addEventListener('click', e => {
   modalContainer.classList.remove('visible')
}))

const populateModal = proj => {
   const project = modalData[proj]
   title.textContent = project.title
   description.textContent = project.detail

   if (project.link) {
      links[0].style.display = 'block'
      links[0].href = project.link
   } else {
      links[0].style.display = 'none'
   }

   links[1].href = project.source
}