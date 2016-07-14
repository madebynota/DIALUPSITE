//File that contains functions to handle finding the time until the next show
//Used by: radio.html

function twoWeeksInMs() {
  //Multiplies milliseconds in a week by two
  var oneWeek = 604800000;
  var twoWeeks = 2*oneWeek;
  return twoWeeks
}

function msUntilNextShow() {
  // To find time until next show:
  // 1. Find current Date
  // 2. Subtract seconds since a previous show's time
  // 3. Divide by two weeks and find the remainder, this is the time until the next show
  // 4. Add this time to the current date 
  // 5. Count down to that time

  //Example Show Time
  //SET SHOW TIME HERE:
  var showTime = new Date('2016/04/06 21:00:00')
  var currentDate = new Date()

  var twoWeeks = twoWeeksInMs()
  var timeSinceShow = currentDate - showTime
  var timeUntilShow = (twoWeeks - (timeSinceShow % twoWeeks))
  return timeUntilShow
}


function showRadioLink() {
  //Replaces the countdown timer with the link to wnurstreetbear.org
  //when the timer runs out
  wnurLink = "http://wnurstreetbeat.org"
  radioTag = "<h1 id='#radioLink'><a href='"+wnurLink+"'>CLICK HERE TO LISTEN</a></h1>"
  $('#radioLink').replaceWith(radioTag)

}

//Wait until the document is fully loaded, then set the clock <span> to the date
$(document).ready(function(){
  timeUntilNextShow = msUntilNextShow()
  threeHours = 10800000
  fiveMinutes = 300000

  //If a show is currently going on, or you're 5 minutes early, immediately show the radio link
  if((timeUntilNextShow > (twoWeeksInMs()-threeHours)) | (timeUntilNextShow < fiveMinutes)){
    showRadioLink()
  } else {
  $('#clock').countdown(new Date().valueOf() + msUntilNextShow(),
    function(event) {
      $(this).html(event.strftime('%D:%H:%M:%S'));
  }).on('finish.countdown', showRadioLink);
  }
});
