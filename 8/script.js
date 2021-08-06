const button = document.querySelector('.button')
const header = document.querySelector('.header')
const leftMenu = document.querySelector('.left-menu')
const rightMenu = document.querySelector('.right-menu')

button.addEventListener('click', () => {
  setTimeout(() => classListToogle(header), 500)
  setTimeout(() => {
    classListToogle(leftMenu)
    classListToogle(rightMenu)
  }, 1000)
})

function classListToogle(elem) {
  elem.classList.toggle('opened')
}

function classListRemove(elem) {
  elem.classList.add('opened')
}
