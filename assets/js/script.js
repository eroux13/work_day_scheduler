$(document).ready(function () {
    // Display current date
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(currentDate);
    console.log(currentDate);

    // Function to display time blocks for the day
    function displayTimeBlock() {
        var currentHour = 13;
        //moment().hour();
        //console.log(currentHour);

        // Loop through time blocks to determine if its past, present, future
        $(".time-block").each(function () {
            // Grab the assigned number value of the ID and set it in variable to compare later
            var timeBlock = parseInt( // Since the value is a string, use parseInt to change data into a number
                $(this) // Select this, in this case ".time-block"
                    .attr("id") // Grab the ID attribute
                    .split("block")[1] // Split by "block" and since it returns an array of substrings, access timeBlock[1] === blocks unique ID
            );
            // Test to see ID value
            console.log(timeBlock);

            // Compare ID value to currentHour to see if it's past, present, or future
            if (timeBlock < currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (timeBlock === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    // Call displayTimeBlock()
    displayTimeBlock();
})