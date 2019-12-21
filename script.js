$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load any saved data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  


// //The current Time
// var $currentTimeElem = $(".time");
// function startClock() {
//     setInterval(function () {
//         // TODO: use moment to get current time and store it in a variable
//         // named currentTime.
//         var currentTime = moment();
//         // TODO: update the text of $currentTimeElem to be currentTime formatted to:
//         // Hours:Minutes:Seconds AM/PM
//         $currentTimeElem.text(currentTime.format("hh:mm:ss a"));
//     }, 1000)
// }
// startClock();

// //Start of time block colors
// var compareTime = moment();
// compareTime = compareTime.format('HH');
// parseInt(compareTime);
// //compare the time blocks
// var specificHour;
// var theNum;
// function timeBlocks() {
//     var theHours = $(".row").find(".hour");
//     //loop thru and compare each time
//     for (var i=0; i<theHours.length;i++){
//         //gets id of each hour
//         specificHour = theHours[i].id;
//         theNum = parseInt(specificHour);
//         //console.log(specificHour);
//         if(theNum<compareTime) {
           
//            var sibling = theHours[i].nextElementSibling
//            sibling.style.background = "lightblue";

           
//         } else if (theNum==compareTime) {
            
//            var sibling = theHours[i].nextElementSibling
//            sibling.style.background = "rgb(248,95,133)";//pink
//         } else {
            
//            var sibling = theHours[i].nextElementSibling
//            sibling.style.background = "rgb(248,215,114)";//tan
//         }
//     }
    

// }
// timeBlocks();

// /*

// //when user hits save button. take input and save it to that box
// $(".saveBtn").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     console.log(idOfInput);
//     var
    
//     //localStorage.setItem("", userInput);
//     //var idOfBox = inputBox.attr('id');
//     //$('#test').id()
//     // need to save to storage
//     //key equals hour. how do i get the hour id into the set("....")
// });*/
// $("#0").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     //console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     //console.log(idOfInput);
//     localStorage.setItem("0", userInput);

// });
// $("#1").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     //console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     //console.log(idOfInput);
//     localStorage.setItem("1", userInput);

// });
// $("#2").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     //console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     //console.log(idOfInput);
//     localStorage.setItem("2", userInput);

// });
// $("#3").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     //console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     //console.log(idOfInput);
//     localStorage.setItem("3", userInput);

// });
// $("#4").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     //console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     //console.log(idOfInput);
//     localStorage.setItem("4", userInput);

// });
// $("#5").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     //console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     //console.log(idOfInput);
//     localStorage.setItem("5", userInput);

// });
// $("#6").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     //console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     //console.log(idOfInput);
//     localStorage.setItem("6", userInput);

// });
// $("#7").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     //console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     //console.log(idOfInput);
//     localStorage.setItem("7", userInput);

// });
// $("#8").on("click", function(){
    
//     var inputBox = $(this).parent().find('input');
//     var userInput = $(this).parent().find('input').val();
//     //console.log(userInput);
//     var idOfInput=inputBox.attr('id')
//     //console.log(idOfInput);
//     localStorage.setItem("8", userInput);

// });






// //on page load, get storage and put it in

// var theData = localStorage.getItem("0");
// $("#20").val(theData);
// var theData = localStorage.getItem("1");
// $("#21").val(theData);
// var theData = localStorage.getItem("2");
// $("#22").val(theData);
// var theData = localStorage.getItem("3");
// $("#23").val(theData);
// var theData = localStorage.getItem("4");
// $("#24").val(theData);
// var theData = localStorage.getItem("5");
// $("#25").val(theData);
// var theData = localStorage.getItem("6");
// $("#26").val(theData);
// var theData = localStorage.getItem("7");
// $("#27").val(theData);
// var theData = localStorage.getItem("8");
// $("#28").val(theData);













// /*
// //variables
// var clickedBox;
// //grabs the box they are adding to
// function askForText() {
//     clickedBox = $(this);
//     //console.log(clickedBox);
//     $(".box").on("click", function saveText() {
//         var userInput = clickedBox.value;
//         clickedBox.textContent = userInput;
//         console.log(clickedBox);
//         //then save it, but it doesnt console log
//     })
    
// }
// //cant get data due to scoping..
// //Gets the users input

// //saves the users input

// //

// */
