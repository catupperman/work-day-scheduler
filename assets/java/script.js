//Psudo: GOAL: daily planner to create a schedule
//TODO: the current day is displayed at the top of the calendar, with running time.
//Use moment to generate current date and time.
var timeDisplayEl = $('#time-display');


function currentTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

// scroll down  (scroll bar needed?)
//TODO: timeblocks for standard business hours 8-8? 12 hour time frame-- for loop would be better use, and less code,  *DRY*
var timeBlkIndex = 0;
//can I loop this?
var timeBlocks = [
    {
        timeFrame: 8,//moment to direct to 8am
        scheduleText: "",
        save: something,//localstorage?
    },
    {

    }
];

//JQuery to build type in blocks with a standard save button or would an array with appendages be more efficient??



// TODO: each timeblock is color coded to indicate whether it is in the past, present, or future
//set three classes past present future
//create a function with the variable of the current time, compare to the time set on the buttons to express different colors
//past- gray
//present- red
//future- green

//possible function
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
//onclick or maybe eventListener... on click is more inclusive to apply to each button as opposed to just one. 



//TODO: WHEN refreshing the page, the saved events persist
setInterval(currentTime, 1000);