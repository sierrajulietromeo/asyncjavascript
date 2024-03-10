const worker = new Worker('./scripts/hardwork.js');

$("#btnRandom").on("click", async () => {
    $("#output").text("Start");
    random = await doHardWork();
    $("#output").text(random);
});

async function doHardWork() {
    return new Promise((resolve) => {
        worker.postMessage({ command: "Start", "milliSeconds": 5000 });
        worker.addEventListener("message", (output) => {
            resolve(output.data);
        });
    });
}