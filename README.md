# Assignment 1


For the first assignment, you are going to create two responsive layouts for a note-taking website. (We'll add JS to this website in the second assignment)

## Instructions:

Initialize a local repository and create one HTML page and one CSS file (saved in a separate folder). As usual, do your development in separate branches and merge back to the main branch when you're done. 

* Make sure the colors you use pass the contrast check (provide screenshot of your check)  https://webaim.org/resources/contrastchecker/ 1 point
* Include a Google font 1 points
* Make use of CSS Grid and Flexbox to position elements (Try to make your layouts as close as possible to how it shows in the screenshot) 5 points
  * The content should take all the available viewport’s height. (https://developer.mozilla.org/en-US/docs/Web/CSS/length)
    *  The sidebar on the left should take 1/5 of the page width, and the rest of the page should be flexibly resized.
    *  Your HTML page should include all the components shown in the screenshot.
    *  Make the logos in the footer clickable. 
*  Logos: 
    *  https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png, 
    *  https://cdn0.iconfinder.com/data/icons/internet-line/512/Internet_Line-02-512.png
*  Responsive design, incorporate media queries where needed. You only need to accommodate two screen sizes, desktop, and mobile 3 points
    * All components (including buttons) should hold their relative position when resizing the page
    *  Use relative units in your CSS
*  Git 3 points
    * Appropriate, meaningful Git commit messages. Make commits at appropriate intervals, not just one at the end
    * Make use of at least one remote feature branch. Push your main branch to Github. Your final work should all be in the Master or Main branch
* Readable code the follows style conventions 1 point
* Semantically correct HTML 3 points
* Logical CSS, without redundant styles 3 points
<img width="1266" alt="Screen Shot 2021-03-10 at 9 41 37 PM" src="https://user-images.githubusercontent.com/47546786/199379845-02ce5273-de35-4814-b8f0-4e07584b185b.png">

Helpful hints and Resources:

This assignment requires that you use two HTML elements that we haven't looked at so far.

textarea: - [HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

and button : [The Button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
 

Submission Instructions:

Submit your zipped folder, git log screenshot, contrast check screenshot, and a link to a GitHub repo containing your work.
[Dropbox](https://learn.bcit.ca/d2l/le/content/880007/viewContent/7779113/View)

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
