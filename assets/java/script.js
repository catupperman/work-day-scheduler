//Psudo: GOAL: daily planner to create a schedule
//TODO: the current day is displayed at the top of the calendar, with running time.
//Use moment to generate current date and time.
var timeDisplayEl = $('#time-display');
var timeBlkIndex = 0;

function currentTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(currentTime, 1000);
// scroll down  (scroll bar needed?)
//TODO: timeblocks for standard business hours 8-5 
//for(i =0; i < 0; i++){


//}

//moment('8:00:00').startOf('hour');
//moment('8:59:59').endOf('hour');



//IDEALLY: How I want this to work- take the currentTime value and compare it to a specific set of time (like an hour and all the misc min and seconds within that hour)

//PONDERING: Can I take a time set using moment like range it from 08:00:00- 8:59:59?


//PONDERING: JQuery to build text boxes with a standard save button or would an array with appendages be more efficient??
var scheduleTime = document.querySelector('$.form-group')

function timeLoop() {
    if (scheduleTime >= currentTime) {
        document.querySelector(".present");
    } if (scheduleTime < currentTime) {
        document.querySelector(".future")
    } else {
        document.querySelector(".past")
    }
}


// TODO: each timeblock is color coded to indicate whether it is in the past, present, or future

//set three classes past(gray) present(red) future(green)
//create a function with the variable of the current time, compare to the time set on the buttons to express different colors

//var past = document.querySelector(".past");
//var present = document.querySelector(".present");
//var future = document.querySelector(".future");


//possible function idea:

// function colorCodes (){
    //if (curentTime >= timeBlock[timeBlkIndex]) 
    //display: gray in text box;
//} if (currentTime <= timeBlock[timeBlkIndex]){
    //display: red in text box;
//} else{
    //display: green in text box;
//}
//return;
//colorCodes;



//TO DO: click into a timeblock to enter an event, with click save to local storage
//JSON elements for local storage, click events to save to the local storage 
//PONDERING: onclick or maybe eventListener... on click is more inclusive to apply to each button as opposed to just one?



//TODO: WHEN refreshing the page, the saved events persist