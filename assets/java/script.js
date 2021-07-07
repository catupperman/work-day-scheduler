//Psudo: GOAL: daily planner to create a schedule
//TODO: the current day is displayed at the top of the calendar, with running time.
//IDEALLY: How I want this to work- take the currentTime value and compare it to a specific set of time (like an hour and all the misc min and seconds within that hour)
var timeDisplayEl = $('#time-display');
var timeBlkIndex = 0;
var past = document.querySelector(".past");
var present = document.querySelector(".present");
var future = document.querySelector(".future");

//TO DO: click into a timeblock to enter an event, with click save to local storage
//JSON elements for local storage, click events to save to the local storage 
$(".saveBtn").on("click", function () {
    var activity = $(this).siblings(".description").val().trim()
    //var hour = $(this).siblings(".hour").text().trim()
    var hour = $(this).parent().attr("id").split("-")[1]
    localStorage.setItem(hour, activity)
})

//TODO: timeblocks for standard business hours 8-5 
var momenthour = moment().hours()
$(".time-block").each(function () {
    var ourHour = $(this).attr("id").split("-")[1]
    if (currentTime >= ourHour) {
        $(this).attr(".time-block").past
    } else if (currentTime <= ourHour) {
        $(this).attr(".time-block").future
    } else {
        $(this).attr(".time-block").present
    }

});
//Use moment to generate current date and time.
function currentTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(currentTime, 1000);



// TODO: each timeblock is color coded to indicate whether it is in the past, present, or future

//set three classes past(gray) present(red) future(green)
//create a function with the variable of the current time, compare to the time set on the buttons to express different colors


//TODO: WHEN refreshing the page, the saved events persist