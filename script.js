
//The current Time
var $currentTimeElem = $("#current-time");
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





