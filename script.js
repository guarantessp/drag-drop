const cards = document.querySelectorAll('.card')
const dropzone = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart(){
  dropzone.forEach( dropzone => dropzone.classList.add('highlight'))
  this.classList.add('isdragging')
}
function drag(){

}
function dragend(){
  dropzone.forEach( dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('isdragging')
}

// local onde vou soltar os cartoes

dropzone.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter(){

}
function dragover(){
  this.classList.add('over')
  const cardBeingDragged = document.querySelector('.isdragging')
  this.appendChild(cardBeingDragged)

}
function dragleave(){
  this.classList.remove('over')
}
function drop(){
  this.classList.remove('over')
}