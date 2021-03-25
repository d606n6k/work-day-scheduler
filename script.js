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

var hourSelect = document.querySelectorAll('hour');
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
var saveButton = $(".saveBtn");

function displayTime(){
    var headMoment = moment().format('LLL'); 
    var currentDay = document.getElementById('currentDay');
    currentDay.textContent = headMoment;
};

function colorShift(){
    var currentHour = moment().hour();
    console.log(currentHour);

    // we need an IF statement to set colors based on the current time
    if(currentHour <= 8 || currentHour >= 17){

    };
};

saveButton.on("click", function(event){
    // we need to tie an event to the onclick event for the button
    var getText = $(this).siblings(".description").val();
    console.log(getText);
    // get stored text from localstorage
    // get the parent id we are in when we enter text
    var getId = $(this).parent().attr("id");
    // console.log(getId);
    // we want to set the ID and its content to localstorage
    localStorage.setItem(getId, getText);

    // var setLocalStorage = document.localstorage.setItem("saved-text", getText);
    // console.log(setLocalStorage);
});

displayTime();
setInterval(displayTime, 1000);

// colorShift();
