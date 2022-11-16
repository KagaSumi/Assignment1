// Create a Class object for each note
class Note {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}
// Create a some temp objects to populate the list of notes
let Note1 = new Note('note one','This is my first note');
let Note2 = new Note('note two','This is my second note');
let NoteArray = [Note1, Note2]
const NoteList_HTML = document.querySelector(".NoteList");

//Function for Saving notes to the note array.
Add_to_List = (Title,Body) => {
    New_Note = new Note(Title,Body);
    ListElement = document.createElement('li');
    ListElement.innerText = Title;
    NoteArray.push(New_Note)
    NoteList_HTML.append(ListElement);
    return;
}
show_elements = () => {
    //TODO: hidden attributes on text elements on cancel and New_Note
};
hide_elements = () => {
    //TODO: hidden attributes on text elements on cancel and New_Note
};

// Save Function
document.getElementById("Save").addEventListener("click", function() {
    var title = prompt('Please enter a title for this note.')
    var body = document.querySelector('textarea').value
    Add_to_List(title,body)
    document.querySelector('textarea').value = ''
});

//Accessing notes from aside menu
document.querySelector('aside ul li').addEventListener("click", function() {
    document.querySelector('textarea').value = Note.body
});

// Dark Mode button
document.getElementById("Dark").addEventListener("click", function() {
    // TODO Toggle background color classes
});

// New Note button
document.getElementById("NewNote").addEventListener("click", function() {
    //TODO Clear values in text area and make sure that are  show_elements
});
document.getElementById("Cancel").addEventListener("click", function() {
    //TODO Clear Values in text area and hide elements once again.
});
