$("#btnRandom").on("click", async () => {
    $("#output").text("Start");
    let output = await makeXhrCall();
    $("#output").text(output);
});

let makeXhrCall = async () => {
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