console.log('This project one of js \"MY NOTES\"');
showNotes();
// If user add note store it to local storage


let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    let addTitle= document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');
    // notes={tlt:addTitle,note:addTxt}
    let notes = localStorage.getItem('notes');
    
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes)
    }
    let myObj ={
        title:addTitle.value,
        text:addTxt.value
    }
    noteObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    addTxt.value = '';
    addTitle.value = '';
    console.log(noteObj);
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj=JSON.parse(notes);
    }

    let html = "";
    noteObj.forEach(function (element, index) {

        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
            </div>`;
    });
    let noteElm = document.getElementById('notes');
    if (noteObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = 'No notes to show';
    }
};
// Function to delete a note
function deleteNote(index){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        noteObj=[];
    }else{
        noteObj=JSON.parse(notes);
    }
    noteObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(noteObj));
    showNotes();
}


// search option by title
let search=document.getElementById('searchTxt');
s
search.addEventListener('input',function(){
    let inputVal=search.value
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
            if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
        console.log(cardTxt);
    })
})