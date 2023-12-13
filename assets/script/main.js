let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Button 1 'Frontend' Click Event

let frontend = document.querySelector('#frontend')

frontend.addEventListener("click", function () {
  frontend.classList.add("changeColor");
})

// Button 2 'Design' Dubble Click Event

let design = document.querySelector('#design')

design.addEventListener("dblclick", function () {
  design.classList.add("changeColor");
})

// Button 3 'And' Click Event

let and = document.querySelector('#and')

and.addEventListener("click", function () {
  and.classList.add("changeColor");
})

// Button 4 'Development' Click Event

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener("click", move)
function move(){
  development.classList.toggle("move");
};



// let development = document.querySelector('#development')

// eventTarget.addEventListener("keydown", (event) => {
//   let development (event.isComposing | event.keyCode === 229) 
//   {
//     return;
//   }
// });