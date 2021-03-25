// Pseduo-Code

// What is the header doing
// the header is displaying the CURRENT TIME (moment.js)

// What is the body doing?
// we have a list of hours available in 1 hour increments, start at 9am - 5pm (9 hours available)
// We have 3 different colors 
    // IF hour is LESS THAN current time make it gray
    // IF hour is EQUAL to the current time display it red
    // IF hour is GREATER THAN the current time display it green

    // We have classes set for 'past', 'present', 'future' for the color related to time

//What happens when I enter something into the field?
// we want to store the inputs in localstorage
// IF the save button is clicked AND the data is stored, display the contents of the input

// make buttons do stuff
    // when button is clicked, save to localstorage
// make boxes change color
// add input text (append) to ?
// retrieve values from localstorage and show them

// display current day in header
var headMoment = moment().format('LLL'); //working
// console.log(headMoment);
var currentDay = $("#currentDay").displayTime;
console.log(currentDay);
function displayTime(){
    currentDay = headMoment;
};

displayTime();

