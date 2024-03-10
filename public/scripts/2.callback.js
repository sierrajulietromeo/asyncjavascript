$("#btnRandom").on("click", function () {
    $("#output").text("Start");
    waitForMilliSeconds(5000, (random) => {
        $("#output").text(random);
    });
});

function waitForMilliSeconds(milliSeconds, callbackFunc) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < milliSeconds);
    random = Math.floor(Math.random() * 100);
    callbackFunc(random);
}