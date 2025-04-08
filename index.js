/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [X] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById("rsvp-button");
let count = 3;

const addParticipant = (event) => {
  // Step 2: Write your code to manipulate the DOM here

  //Get data from new participant
  let participant_name = document.getElementById("name").value;
  let major = document.getElementById("major").value;
  let email = document.getElementById("email").value;

  //Create the new <p> element for the new contestant
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `${participant_name} studying ${major} has RSVP'D`;

  //Appending the new participant name onto the list
  const participantsDiv = document.querySelector(".participants");
  participantsDiv.appendChild(newParticipant);
  
  //Remove current count of RSVP's
  const currentCount = document.getElementById("rsvp-count");
  if (currentCount) {
    currentCount.remove();
  }
  
  participantsDiv.appendChild(newCount);
  
  //Increase count of participants
  count = count + 1;

  //Create a new <p> for count
  const newCount = document.createElement("p");
  newCount.id = "rsvp-count";
  newCount.textContent = `Total RSVP's: ${count}`

  event.preventDefault(); //To prevent the automatic refresh
}

// Step 3: Add a click event listener to the submit RSVP button here
rsvpButton.addEventListener("click", addParticipant);






/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/


/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/


/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/

