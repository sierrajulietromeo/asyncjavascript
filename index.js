const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.get("/random", (request, response) => {
    waitForMilliSeconds(5000);
    const random = {
        "random": Math.floor(Math.random() * 100)
    };    
    response.send(random);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

function waitForMilliSeconds(milliSeconds) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < milliSeconds);
}