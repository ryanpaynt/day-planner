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
var edit = $('#midcol');
var date = $('#currentDay');
var row = $('.row');
var unix = parseInt(moment().format('HH'));

var obj = [];

$('#currentDay').text(moment().format("MMM Do, LTS"));

edit.text(localStorage.getItem('edit'));

    edit.on('blur', function(){
        localStorage.setItem('edit', this.innerHTML);
    });
var i = 0;
$('[id*=num]').each(function(){
    obj.push(`${parseInt(this.innerHTML)}`);
});
console.log(obj);

checkTime();

var i = 7;
function checkTime(){
    for(var i = 0; i < obj.length; i++){
        if(unix === parseInt(root.children().eq(i).children().eq(0).text().substring(0,2))){
            root.children().eq(i).children().eq(1).css('background-color', 'brown');
        } else if(unix < parseInt(root.children().eq(i).children().eq(0).text().substring(0,2))){
            root.children().eq(i).children().eq(1).css('background-color', 'green');
        }else {
            root.children().eq(i).children().eq(1).css('background-color', 'red');
        }
    }
}