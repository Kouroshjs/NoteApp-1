const $ = document
const inputElem = $.querySelector('#input-field');
const addBtn = $.querySelector('#btn-save');
const container = $.querySelector('#listed')
let colorsArray = $.querySelectorAll('.color-box');
let cardsArray = $.querySelectorAll('.card');
let noteColor;
const cleanIcon = $.querySelector('#btn-icon');
notesParent = document.querySelector('#listed');


function clearInput() {
  inputElem.value = '';
  inputElem.style.backgroundColor = 'white'
}


function changeBg(color) {
  color.addEventListener('click', function () {
    noteColor = color.style.backgroundColor;
    inputElem.style.backgroundColor = noteColor;
  })
}

function noteAdd() {
  if (inputElem.value) {
    let newNoteDiv = $.createElement('div');
    let newNoteP = $.createElement('p');
    newNoteDiv.append(newNoteP);
    container.append(newNoteDiv);
    newNoteP.innerHTML = inputElem.value;
    newNoteDiv.className = "card shadow-sm rounded";
    newNoteP.className = "card-text p-3";
    newNoteDiv.style.backgroundColor = noteColor;
    inputElem.value = '';
    inputElem.style.backgroundColor = 'white';
    inputElem.blur()
    // newNoteDiv.addEventListener('click', removeNote);

  }

}

// function removeNote(event) {
//   event.target.parentElement.remove()
// }

notesParent.addEventListener('click' , function(event) {
  console.log(event.target);
  if (event.target.className === "card-text p-3") {
    event.target.parentElement.remove()
  }
})





addBtn.addEventListener('click', noteAdd);
colorsArray.forEach(changeBg);
cleanIcon.addEventListener('click', clearInput);
inputElem.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    noteAdd()
  }
} )

