let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// MIJN JAVA SCRIPT:

// frontend knop
let frontend = document.querySelector('a:nth-of-type(1)')

let zoomIn = function () {
  frontend.classList.toggle('zoom-in');
}
frontend.addEventListener('click', zoomIn)


// design knop
let design = document.querySelector('a:nth-of-type(2)')

  design.addEventListener('mouseover', () => {
    design.classList.add('flip');
  });

  design.addEventListener('mouseleave', () => {
    design.classList.remove('flip');
  });


// & knop
let and = document.querySelector('a:nth-of-type(3)')

let colorChange = function () {
  and.classList.toggle('color-change');
}
and.addEventListener('click', colorChange)