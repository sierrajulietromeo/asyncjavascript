$("#btnRandom").on("click", async () => {
    $("#output").text("Start");
    random = await waitForMilliSeconds(5000);    
    $("#output").text(random);
});

async function waitForMilliSeconds(milliSeconds) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < milliSeconds);
    return Math.floor(Math.random() * 100);
}
