let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}









let frontend = document.querySelector('a:nth-of-type(1)')

let zoomIn = function() {
  frontend.classList.toggle('zoom-in');
}
frontend.addEventListener('click',zoomIn)



