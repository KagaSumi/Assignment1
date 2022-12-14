// Create a Class object for each note
class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
}

// Create a some temp objects to populate the list of notes
let Note1 = new Note("note one", "This is my first note");
let Note2 = new Note("note two", "This is my second note");
let NoteArray = [Note1, Note2];

// Setting some often called arrays and variables for site functionality
const NoteList_HTML = document.querySelector(".NoteList");
const NoteArea = [
  document.getElementById("Cancel"),
  document.getElementById("Save"),
  document.querySelector("textarea")
];

const Color_List = [];
for (element of document.getElementsByClassName("light")) {
  Color_List.push(element);
};

// Function for Saving notes to the note array.
Add_to_List = (Title, Body) => {
  New_Note = new Note(Title, Body);
  ListElement = document.createElement("li");
  ListElement.innerText = Title;
  NoteArray.push(New_Note);
  NoteList_HTML.appendChild(ListElement);
};

// Function to refer note's body
FindNote = event => {
  show_elements();
  for (note of NoteArray) {
    if (note.title == event.target.innerText) {
      document.querySelector("textarea").value = note.body;
    }
  }
};

// Show NoteArea elements visibility & Clear text in the textarea
show_elements = () => {
  if (!document.querySelector("textarea").hasAttribute("hidden")) {
    clear_text();
  }
  for (element of NoteArea) {
    if (element.hasAttribute("hidden")) {
      element.toggleAttribute("hidden");
    }
  }
};

// Function for setting dark and light theme
dark_light_mode = event => {
  for (element of Color_List) {
    element.classList.toggle("light");
    element.classList.toggle("dark");
  }
  if (event.target.innerText == "Dark Theme") {
    event.target.innerText = "Light Theme";
  } else {
    event.target.innerText = "Dark Theme";
  }
};

// Hides NoteArea elements visibility
hide_elements = () => {
  for (element of NoteArea) {
    if (!element.hasAttribute("hidden")) {
      element.toggleAttribute("hidden");
    }
  }
};

// Function for clearing the text area value
clear_text = () => (document.querySelector("textarea").value = "");

// Function for saving notes
save = () => {
  var title = prompt("Please enter a title for this note.");
  var body = document.querySelector("textarea").value;
  Add_to_List(title, body);
  clear_text();
};

// Add listener to aside ul to find notes
NoteList_HTML.addEventListener("click",FindNote);

// Save Button Function
document.getElementById("Save").addEventListener("click", save);

// Dark Mode button
document.getElementById("Dark").addEventListener("click", dark_light_mode);

// New Note button
document.getElementById("NewNote").addEventListener("click", show_elements);

// Cancel button
document.getElementById("Cancel").addEventListener("click", hide_elements);

// Clearing the textarea on refresh as we don't want users to have text in the textarea.
clear_text();
