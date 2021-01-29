$(document).ready(function () {
    // Display current date
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(currentDate);

    // Function to display time blocks for the day
    function displayTimeBlock() {
        var currentHour = moment().hour();
        console.log(currentHour);
        var currentHours = moment().hours();
        console.log(currentHours);

        // Loop through time blocks to determine if its past, present, future
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("block")[1]);
            console.log(timeBlock);
        })
        // $.each($(".hour"), function () {
        //     var hourText = $.trim($(".hour").text());
        //     var timeBlockHour = hourText.split("");
        //     console.log(timeBlockHour[i]);
        // })
    }
    // Call displayTimeBlock()
    displayTimeBlock();
})