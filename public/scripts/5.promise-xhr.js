$("#btnRandom").on("click", function () {
    $("#output").text("Start");
    makeXhrCall().then((output) => {
        $("#output").text(output);
    });
    $("#output").text("Sent xhr request");
});

function makeXhrCall() {
    const myPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("loadend", () => {
            resolve(xhr.responseText);            
        });
        xhr.open("GET", "/random");    
        xhr.send();
      });
    return myPromise;
}