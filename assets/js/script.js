var currentDate= moment().format('dddd, MMM Do YYYY,');
    $('#currentDay').html(currentDate);

var currentTi= moment().format('LT');
$('#currentTime').html(currentTi);

var d = new Date();
var hr = d.getHours();

function colorArea() {

    if (hr > 9) {
        $('#descript1').addClass('past');
    }
    else if (hr >= 9 && hr <10) {
        $('#descript1').addClass('.present');
    }
    else if (hr < 9) {
        $('#descript1').addClass('.future');
    }
}

$(document).ready(function() {
    console.log("ready!");
    $('.saveBtn1').on('click', function() {
        var textInput1= document.querySelector('#descript1');
        var time= $(this).parent().attr('id');
        localStorage.setItem(time, textInput1.value);
    })
    });
$('#9oclock .description').val(localStorage.getItem('9oclock'));

    $('.saveBtn2').on('click', function() {
        var textInput2= document.querySelector('#descript2');
        var time= $(this).parent().attr('id');
        localStorage.setItem(time, textInput2.value);
    });
$('#10oclock .description').val(localStorage.getItem('10oclock'));

    $('.saveBtn3').on('click', function() {
        var textInput3= document.querySelector('#descript3');
        var time= $(this).parent().attr('id');
        localStorage.setItem(time, textInput3.value);
    });
$('#11oclock .description').val(localStorage.getItem('11oclock'));

$('.saveBtn4').on('click', function() {
    var textInput4= document.querySelector('#descript4');
    var time= $(this).parent().attr('id');
    localStorage.setItem(time, textInput4.value);
});
$('#12oclock .description').val(localStorage.getItem('12oclock'));

$('.saveBtn5').on('click', function() {
    var textInput5= document.querySelector('#descript5');
    var time= $(this).parent().attr('id');
    localStorage.setItem(time, textInput5.value);
});
$('#1oclock .description').val(localStorage.getItem('1oclock'));

$('.saveBtn6').on('click', function() {
    var textInput5= document.querySelector('#descript6');
    var time= $(this).parent().attr('id');
    localStorage.setItem(time, textInput5.value);
});
$('#2oclock .description').val(localStorage.getItem('2oclock'));

$('.saveBtn7').on('click', function() {
    var textInput5= document.querySelector('#descript7');
    var time= $(this).parent().attr('id');
    localStorage.setItem(time, textInput5.value);
});
$('#3oclock .description').val(localStorage.getItem('3oclock'));

$('.saveBtn8').on('click', function() {
    var textInput5= document.querySelector('#descript8');
    var time= $(this).parent().attr('id');
    localStorage.setItem(time, textInput5.value);
});
$('#4oclock .description').val(localStorage.getItem('4oclock'));

$('.saveBtn9').on('click', function() {
    var textInput5= document.querySelector('#descript9');
    var time= $(this).parent().attr('id');
    localStorage.setItem(time, textInput5.value);
});
$('#5oclock .description').val(localStorage.getItem('5oclock'));
