$("#btnRandom").on("click", function () {
    $("#output").text("Start");
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
        $("#output").text(xhr.responseText);
    });

    xhr.open("GET", "/random");

    xhr.send();
    $("#output").text("Sent xhr request");
});