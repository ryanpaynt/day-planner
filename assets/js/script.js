// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I row the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
var root = $('#root');
var edit1 = $('#midcol1');
var edit2 = $('#midcol2');
var edit3 = $('#midcol3');
var edit4 = $('#midcol4');
var edit5 = $('#midcol5');
var edit6 = $('#midcol6');
var edit7 = $('#midcol7');
var edit8 = $('#midcol8');
var edit9 = $('#midcol9');
var date = $('#currentDay');
var row = $('.row');
var unix = parseInt(moment().format('HH'));

var obj = [];

$('#currentDay').text(moment().format("MMM Do, LTS"));

edit1.text(localStorage.getItem('edit1'));

    edit1.on('blur', function(){
        localStorage.setItem('edit1', this.innerHTML);
    });

edit2.text(localStorage.getItem('edit2'));

    edit2.on('blur', function(){
        localStorage.setItem('edit2', this.innerHTML);
    });

edit3.text(localStorage.getItem('edit3'));

    edit3.on('blur', function(){
        localStorage.setItem('edit3', this.innerHTML);
    });

edit4.text(localStorage.getItem('edit4'));

    edit4.on('blur', function(){
        localStorage.setItem('edit4', this.innerHTML);
    });

edit5.text(localStorage.getItem('edit5'));

    edit5.on('blur', function(){
        localStorage.setItem('edit5', this.innerHTML);
    });

edit6.text(localStorage.getItem('edit6'));

    edit6.on('blur', function(){
        localStorage.setItem('edit6', this.innerHTML);
    });

edit7.text(localStorage.getItem('edit7'));

    edit7.on('blur', function(){
        localStorage.setItem('edit7', this.innerHTML);
    });

edit8.text(localStorage.getItem('edit8'));

    edit8.on('blur', function(){
        localStorage.setItem('edit8', this.innerHTML);
    });

edit9.text(localStorage.getItem('edit9'));

    edit9.on('blur', function(){
        localStorage.setItem('edit9', this.innerHTML);
    });

$('[id*=num]').each(function(){
    obj.push(`${parseInt(this.innerHTML)}`);
});
console.log(obj);

checkTime();

var i = 7;
function checkTime(){
    for(var i = 0; i < obj.length; i++){
        if(unix === parseInt(root.children().eq(i).children().eq(0).text().substring(0,2))){
            root.children().eq(i).children().eq(1).css('background-color', '#907163');
        } else if(unix < parseInt(root.children().eq(i).children().eq(0).text().substring(0,2))){
            root.children().eq(i).children().eq(1).css('background-color', '#5E8C6C');
        }else {
            root.children().eq(i).children().eq(1).css('background-color', '#982E26');
        }
    }
}