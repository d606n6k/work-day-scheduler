var currentTimeHour = moment().format("LT");
// var hourSelect = document.querySelectorAll('hour');
var timeBlock = $(".time-block");
var saveButton = $(".saveBtn");
var hourArray = $(".time-block");

function displayTime(){
    var headMoment = moment().format('LLL'); 
    var currentDay = document.getElementById('currentDay');
    currentDay.textContent = headMoment;
};

function colorShift(){
    var currentHour = moment().hour();
    for (var i = 9; i <= 17; i++) {
        if (currentHour > [i] ) {
            $("#hour-"+[i]).addClass("past");
        } else if (currentHour == [i] ) {
            $("#hour-"+[i]).addClass("present");
        } else if (currentHour < [i] ) {
            $("#hour-"+[i]).addClass("future");
        }
    }    
};

saveButton.on("click", function(event){
    var getText = $(this).siblings(".description").val();
    var getId = $(this).parent().attr("id");
    window.localStorage.setItem(getId, getText);
});

function displayLocalStorage(){
    var hour = 9;
    while(hour < 18){
        var getLocalStorage = window.localStorage.getItem("hour-" + hour);
        $("#hour-" + hour + " > textarea ").val(getLocalStorage);
        hour++;
    };
}

displayLocalStorage();
displayTime();
setInterval(displayTime, 1000);

colorShift();