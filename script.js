const noteContainers = document.querySelector('.note-container');
const createButton = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

// load notes from local storage
function loadNotes() {
    noteContainers.innerHTML = localStorage.getItem('notes');
}
loadNotes();

// save notes to local storage
function saveNotes() {
    localStorage.setItem('notes', noteContainers.innerHTML);
}

// Create textfiled for notes and add to note-container
createButton.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'images/delete.png';
    noteContainers.appendChild(inputBox).appendChild(img);
})

// Delete note
noteContainers.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        saveNotes();
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function() {
                saveNotes();
            }
        })
    }
})

// Adding line break to notes by pressing enter
document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})