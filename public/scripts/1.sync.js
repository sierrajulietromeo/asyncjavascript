$("#btnRandom").on("click", function () {
    $("#output").text("Start");
    randomNum = waitForMilliSeconds(5000);
    $("#output").text(randomNum);
});

function waitForMilliSeconds(milliSeconds) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < milliSeconds);
    return Math.floor(Math.random() * 100);
}