var currentTimeHour = moment().format("LT");
var hourSelect = document.querySelectorAll('hour');
var timeBlock = $(".time-block");
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
var hourArray = $(".time-block");

// console.log(hourArray);
// console.log(dataHourArray);

function displayTime(){
    var headMoment = moment().format('LLL'); 
    var currentDay = document.getElementById('currentDay');
    currentDay.textContent = headMoment;
};

function colorShift(){
    var currentHour = moment().hour();
    // var currentHour = 17;
    console.log(currentHour);

    // we need an IF statement to set colors based on the current time
    for (var i = 9; i <= 17; i++) {
        if (currentHour > [i] ) {
            $("#hour-"+[i]).addClass("past");
        } else if (currentHour == [i] ) {
            $("#hour-"+[i]).addClass("present");
        } else if (currentHour < [i] ) {
            $("#hour-"+[i]).addClass("future");
        }
    }    
    // for (var i = 0; hourArray.length; i++){
    //     if(currentHour > $(hourArray[i]).attr("data-hour")){
    //         $(hourArray[i]).addClass("past");
    //     }
    // }
};

// working - DO NOT CHANGE
saveButton.on("click", function(event){
    var getText = $(this).siblings(".description").val();
    var getId = $(this).parent().attr("id");
    localStorage.setItem(getId, getText);
});

// get items from localstorage
// var retrievedObject = localStorage.getItem(getId, getText);
//     console.log(retrievedObject);
// // get items from local storage
// function displayStored(){
//     var retrievedObject = localStorage.getItem(getId, getText);
//     console.log(retrievedObject);
// };
// displayStored();



displayTime();
setInterval(displayTime, 1000);

colorShift();
