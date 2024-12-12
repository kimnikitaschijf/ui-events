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


// development knop
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('mouseover', () => {
  development.classList.add('shake');
});

development.addEventListener('mouseleave', () => {
  development.classList.remove('shake');
});


// sprint 5 knop
let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('mouseover', () => {
  sprint.classList.add('turn');
});

sprint.addEventListener('mouseleave', () => {
  sprint.classList.remove('turn');
});


// fix knop
let fix = document.querySelector('a:nth-of-type(6)')

let rainbow = function () {
  fix.classList.toggle('rainbow');
}
fix.addEventListener('click', rainbow)


// the button
let the = document.querySelector('a:nth-of-type(7)')

let bounce = function () {
  the.classList.toggle('bounce');
}
the.addEventListener('click', bounce)


// flow button
let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('mouseover', () => {
  flow.classList.add('explode');
});

flow.addEventListener('mouseleave', () => {
  flow.classList.remove('explode');
});
