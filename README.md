# Assignment 2

Start working in the same repository you had for assignment 1. Make a new branch for the following activity.

* Fix any error you had in your assignment 1 submission. Make one commit per fix **(2 points)**

As you make the following changes to add interactivity to your website, make reasonable commits with clear messages **(2 points)**:

* When the “Dark Theme” button is clicked, the background colors of the sidebar and the container of the textarea and the buttons should change to darker colors, and the text on the button should be updated to “Light Theme”. Pressing the “Light Theme” button would reverse all the changes. **(3 points)**
  * Hint: Think about how you can do this by <u>toggling</u> class property
* Clicking the “cancel” button should hide the text area, save, and cancel buttons. **(2 points)**
* If the textarea, save and cancel buttons are hidden, pressing "New Note" button would make them visible. After that pressing “New Note” again should clear the text area. **(2 points)**
* Declare an array (notesArray) in your JS code with JS note objects: {title:"note one", body:"this is my first note"}. Make sure this variable is declared outside of any function. **(1 point)**
* When the user types something in the textarea and clicks the “save” button **(4 points)**
  * Show an alert to the user and ask for the title of the note they want to save
  * Add a new JS object to the notesArray with the provided title and the text in the text area as the body
  * Add a list item to the sidebar with the title of the JS object you just added to the array
* When any of the list items on the sidebar are clicked, you should search through notesArray and find the JS object with its title property equal to the text of the clicked item. Then display the value of its body property in the text area. **(2 points)**
  * The best way to implement this is with an event handler that uses the event object to get the title of the note from the innerText of its target.
* Write clear, clean, and concise code. Functions should perform only one task, variable names should be meaningful (not x) to let other developers know what they are used for. This should show consideration and problem-solving skills, try to do things as efficiently as you can. This includes any new HTML and CSS **(2 points)**
* After you are done with your work, push your branch to Github, make a pull request, assign it to yourself, merge to main, pull the changes in your local repo's main branch. **(2 point)**

## Submission

* Zip file contain your local main branch code
* Screenshot of git log in main branch
* GitHub link
