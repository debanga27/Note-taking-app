console.log('Welcome to Notes app. this is app.js');

// If user adds a note, add it to the localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})