//Psudo: GOAL: daily planner to create a schedule
//TODO: the current day is displayed at the top of the calendar, with running time.
//IDEALLY: How I want this to work- take the currentTime value and compare it to a specific set of time (like an hour and all the misc min and seconds within that hour)
var timeDisplayEl = $('#time-display');


//Use moment to generate current date and time.
function currentTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(currentTime, 1000);

//TO DO: click into a timeblock to enter an event, with click save to local storage
//JSON elements for local storage, click events to save to the local storage 
$(".saveBtn").on("click", function () {
    var activity = $(this).siblings(".description").val().trim()
    //var hour = $(this).siblings(".hour").text().trim()
    var hour = $(this).parent().attr("id").split("-")[1]
    localStorage.setItem(hour, activity)
})

//TODO: timeblocks for standard business hours 9-5 
// TODO: each timeblock is color coded to indicate whether it is in the past, present, or future

//create a function with the variable of the current time, compare to the time set on the buttons to express different colors
var momenthour = moment().hours()
//console.log(momenthour)
//addClass
$(".time-block").each(function () {
    var chartHour = $(this).attr("id").split("-")[1]

    if (momenthour == chartHour) {
        $(this).addClass("present")
    } else if (momenthour < chartHour) {
        $(this).addClass("past")
    } else {
        $(this).addClass("future")
    }
});

//TODO: WHEN refreshing the page, the saved events persist