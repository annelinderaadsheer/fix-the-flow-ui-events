let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Button 'Frontend' Click Event

let frontend = document.querySelector('#frontend')

frontend.addEventListener("click", function () {
  frontend.classList.add("changeColor");
})

// Button 'Design' Dubble Click Event

let design = document.querySelector('#design')

design.addEventListener("dblclick", function () {
  design.classList.add("changeColor");
})

// Button 'And' Click Event

let and = document.querySelector('#and')

and.addEventListener("click", function () {
  and.classList.add("changeColor");
})

// Button 'Development'

let development = document.querySelector('#development')

and.addEventListener("keydown", function () {
  and.classList.add ("keydown")
})

// eventTarget.addEventListener("keydown", (event) => {
//   let development (event.isComposing | event.keyCode === 229) 
//   {
//     return;
//   }
//   // do something
// });