$(document).ready(function () {
    // Display current date
    var currentDate = moment().format("dddd, MMMM Do YYYY");

    $("#currentDay").append(currentDate);
})