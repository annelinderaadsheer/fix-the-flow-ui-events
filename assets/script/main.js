let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Button Frontend Click Event

let frontend = document.querySelector('#frontend')

frontend.addEventListener("click", function () {
  frontend.classList.add("changeColor");
})

// Button Design Dubble Click Event

let design = document.querySelector('#design')

design.addEventListener("dblclick", function () {
  design.classList.add("changeColor");
})