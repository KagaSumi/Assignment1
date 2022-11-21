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
const NoteList_HTML = document.querySelector(".NoteList");
const NoteAreaArray = [
  document.getElementById("Cancel"),
  document.getElementById("Save"),
  document.querySelector("textarea")
];
const Note_List = document.querySelectorAll("aside ul li");
const Color_List = [];
for (element of document.getElementsByClassName("light")) {
  Color_List.push(element);
}
//Function for Saving notes to the note array.
Add_to_List = (Title, Body) => {
  New_Note = new Note(Title, Body);
  ListElement = document.createElement("li");
  ListElement.innerText = Title;
  NoteArray.push(New_Note);
  NoteList_HTML.append(ListElement);
  ListElement.addEventListener("click", function() {
    show_elements();
    for (element of NoteArray) {
      if (element.title == event.target.innerText) {
        document.querySelector("textarea").value = element.body;
      }
    }
  });
};
show_elements = () => {
  //Hides NoteAreaArray elements visibility & Clear text in the textarea
  for (element of NoteAreaArray) {
    if (element.hasAttribute("hidden")) {
      element.toggleAttribute("hidden");
    }
  }
  clear_text();
};
hide_elements = () => {
  //Hides NoteAreaArray elements visibility
  for (element of NoteAreaArray) {
    if (!element.hasAttribute("hidden")) {
      element.toggleAttribute("hidden");
    }
  }
};

clear_text = () => (document.querySelector("textarea").value = "");

// Save Button Function
document.getElementById("Save").addEventListener("click", function() {
  var title = prompt("Please enter a title for this note.");
  var body = document.querySelector("textarea").value;
  Add_to_List(title, body);
  clear_text();
});

//Assigns the preexisting notes click function
for (element of Note_List) {
  element.addEventListener("click", function() {
    show_elements();
    for (element of NoteArray) {
      if (element.title == event.target.innerText) {
        document.querySelector("textarea").value = element.body;
      }
    }
  });
}

// Dark Mode button
document.getElementById("Dark").addEventListener("click", function() {
  for (element of Color_List) {
    element.classList.toggle("light");
    element.classList.toggle("dark");
  }
  if (event.target.innerText == "Dark Theme") {
    event.target.innerText = "Light Theme";
  } else {
    event.target.innerText = "Dark Theme";
  }
});

// New Note button
document.getElementById("NewNote").addEventListener("click", function() {
  show_elements();
});

//Cancel button
document.getElementById("Cancel").addEventListener("click", function() {
  hide_elements();
});

hide_elements();