//Function to call the date ticker on page load
var oneWeek = 604800000;
var twoWeeks = 2*oneWeek;

//Example Show Time
var showTime = new Date('2016/04/06 23:00:00')

var currentDate = new Date()

// To find time until next show:
// 1. Find current Date
// 2. Subtrace seconds since a show's time
// 3. Find the remainder (%) when dividing the value of 2 weeks

var timeUntilShow = (twoWeeks - ((currentDate-showTime) % twoWeeks))
$(document).ready(function(){
$('#clock').countdown(new Date().valueOf() + timeUntilShow, function(event) {
    $(this).html(event.strftime('%D:%H:%M:%S'));
  });
});
