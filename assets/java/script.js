var timeDisplayEl = $('#time-display');
//Use moment to generate current date and time.
function currentTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(currentTime, 1000);

//JSON elements for local storage, click events to save to the local storage 
$(".saveBtn").on("click", function () {
    var activity = $(this).siblings(".description").val().trim()
    var hour = $(this).parent().attr("id").split("-")[1]
    localStorage.setItem(hour, activity)
    
})

//create a function with the variable of the current time, compare to the time set on the buttons to express different colors
var momenthour = moment().hours()

//addClass to apply the CSS styling per hour
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

var appdPage = $(this).siblings(".hour").text().trim()

$(this).val(localStorage.getItem(appdPage))





