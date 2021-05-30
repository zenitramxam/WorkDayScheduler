var currentDate= moment().format('dddd, MMM Do YYYY');
    $('#currentDay').html(currentDate);

$(document).ready(function() {
    console.log("ready!");
    $('.saveBtn').on('click', function() {
        var textInput= $(this).siblings('.description').val();
        localStorage.setItem(textInput);
    })
    });
