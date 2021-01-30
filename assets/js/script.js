$(document).ready(function () {
    // Display current date
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(currentDate);
    console.log(currentDate);

    // Retrieve saved events from local storage
    $(".event9").val(localStorage.getItem("event9"));
    $(".event10").val(localStorage.getItem("event10"));
    $(".event11").val(localStorage.getItem("event11"));
    $(".event12").val(localStorage.getItem("event12"));
    $(".event13").val(localStorage.getItem("event13"));
    $(".event14").val(localStorage.getItem("event14"));
    $(".event15").val(localStorage.getItem("event15"));
    $(".event16").val(localStorage.getItem("event16"));
    $(".event17").val(localStorage.getItem("event17"));

    // Function to display time blocks for the day
    function displayTimeBlock() {
        var currentHour = moment().hour();
        console.log(currentHour);

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

    // Save functions
    $(".save9").on("click", function (e) {
        e.preventDefault();
        if ($(".event9") !== "") {
            localStorage.setItem("event9", $(".event9").val());
        }
    })
    $(".save10").on("click", function (e) {
        e.preventDefault();
        if ($(".event10") !== "") {
            localStorage.setItem("event10", $(".event10").val());
        }
    })
    $(".save11").on("click", function (e) {
        e.preventDefault();
        if ($(".event11") !== "") {
            localStorage.setItem("event11", $(".event11").val());
        }
    })
    $(".save12").on("click", function (e) {
        e.preventDefault();
        if ($(".event12") !== "") {
            localStorage.setItem("event12", $(".event12").val());
        }
    })
    $(".save13").on("click", function (e) {
        e.preventDefault();
        if ($(".event13") !== "") {
            localStorage.setItem("event13", $(".event13").val());
        }
    })
    $(".save14").on("click", function (e) {
        e.preventDefault();
        if ($(".event14") !== "") {
            localStorage.setItem("event14", $(".event14").val());
        }
    })
    $(".save15").on("click", function (e) {
        e.preventDefault();
        if ($(".event9") !== "") {
            localStorage.setItem("event15", $(".event15").val());
        }
    })
    $(".save16").on("click", function (e) {
        e.preventDefault();
        if ($(".event16") !== "") {
            localStorage.setItem("event16", $(".event16").val());
        }
    })
    $(".save17").on("click", function (e) {
        e.preventDefault();
        if ($(".event17") !== "") {
            localStorage.setItem("event17", $(".event17").val());
        }
    })

    // Call displayTimeBlock()
    displayTimeBlock();
})