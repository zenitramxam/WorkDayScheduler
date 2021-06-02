var currentDate= moment().format('dddd, MMM Do YYYY,');
    $('#currentDay').html(currentDate);

$(document).ready(function() {
    console.log("ready!");
    $('.saveBtn1').on('click', function() {
        //var textInput= document.querySelector('#8text');
        var textInput1= document.querySelector('#descript1');
        var time= $(this).parent().attr('id');
        //localStorage.setItem('textInput', JSON.stringify(textInput));
        //textInput.value = localStorage.getItem('comment')
        localStorage.setItem(time, textInput1.value);
        console.log(localStorage);
    })
    });
$('#8oclock .description').val(localStorage.getItem('8oclock'));

$(document).ready(function() {
    console.log("ready!");
    $('.saveBtn2').on('click', function() {
        var textInput2= document.querySelector('#descript2');
        var time= $(this).parent().attr('id');
        localStorage.setItem(time, textInput2.value);
        console.log(localStorage);
    })
    });
$('#9oclock .description').val(localStorage.getItem('9oclock'));

    $('.saveBtn3').on('click', function() {
        var textInput3= document.querySelector('#descript3');
        var time= $(this).parent().attr('id');
        localStorage.setItem(time, textInput3.value);
        console.log(localStorage);
    });
$('#10oclock .description').val(localStorage.getItem('10oclock'));

