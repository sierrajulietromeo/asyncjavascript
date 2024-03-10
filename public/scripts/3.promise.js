$("#btnRandom").on("click", function () {
    $("#output").text("Start");
    waitForMilliSeconds(5000).then( (random) => {
        $("#output").text(random);
    });
});

function waitForMilliSeconds(milliSeconds) {
    const myPromise = new Promise((resolve, reject) => {
        var date = new Date();
        var curDate = null;
        do { curDate = new Date(); }
        while (curDate - date < milliSeconds);
        random = Math.floor(Math.random() * 100);
        resolve(random);
      });
    return myPromise;
}