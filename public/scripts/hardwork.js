addEventListener("message", (message) => {
    if (message.data.command === "Start") {
        waitForMilliSeconds(message.data.milliSeconds)
    }
});

function waitForMilliSeconds(milliSeconds){
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < milliSeconds);
    random = Math.floor(Math.random() * 100);
    postMessage(random);
}