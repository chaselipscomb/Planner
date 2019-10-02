
//The current Time
var $currentTimeElem = $(".time");
function startClock() {
    setInterval(function () {
        // TODO: use moment to get current time and store it in a variable
        // named currentTime.
        var currentTime = moment();
        // TODO: update the text of $currentTimeElem to be currentTime formatted to:
        // Hours:Minutes:Seconds AM/PM
        $currentTimeElem.text(currentTime.format("hh:mm:ss a"));
    }, 1000)
}
startClock();

var compareTime = moment();
compareTime = compareTime.format('HH');
parseInt(compareTime);
//compare the time blocks
function timeBlocks() {
    var theHours = $(".row").find(".hour");
    //loop thru and compare each time
    for (var i=0; i<theHours.length;i++){
        //gets id of each hour
        var specificHour = theHours[i].id;
        var theNum = parseInt(specificHour);
        //console.log(specificHour);
        if(theNum<12) {
           theHours[i].style.background = "red";
           var sibling = theHours[i].nextElementSibling
           sibling.style.background = "red";

           
        } else if (theNum===12) {
            theHours[i].style.background = "blue";
           var sibling = theHours[i].nextElementSibling
           sibling.style.background = "blue";
        } else {
            theHours[i].style.background = "yellow";
           var sibling = theHours[i].nextElementSibling
           sibling.style.background = "yellow";
        }
    }
    //runs through each hour to see if its earlier or later
   /* for (var i = 0; i<theHours; i++){
        var specificHour = theHours[i].attr('id');
        parseInt(specificHour);
        if(specificHour<compareTime){
            console.log("its earlier");
        } else{
            console.log("its later");
        }
    }*/

}
timeBlocks();







//when user hits save button. take input and save it to that box
$(".saveBtn").on("click", function(){
    var inputBox = $(this).parent().find('input');
    var userInput = $(this).parent().find('input').val();
    var idOfBox = inputBox.attr('id');
    //$('#test').id()
    // need to save to storage
});






//on page load, get storage and put it in













/*
//variables
var clickedBox;
//grabs the box they are adding to
function askForText() {
    clickedBox = $(this);
    //console.log(clickedBox);
    $(".box").on("click", function saveText() {
        var userInput = clickedBox.value;
        clickedBox.textContent = userInput;
        console.log(clickedBox);
        //then save it, but it doesnt console log
    })
    
}
//cant get data due to scoping..
//Gets the users input

//saves the users input

//

*/
